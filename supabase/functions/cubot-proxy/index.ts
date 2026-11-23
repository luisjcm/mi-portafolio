import "@supabase/functions-js/edge-runtime.d.ts";
import { CUBOT_SYSTEM_PROMPT } from "./systemPrompt.ts";
import { checkInput, checkOutput, sanitizeMessages } from "./guardrails.ts";

// Orígenes permitidos. Ajusta con: supabase secrets set ALLOWED_ORIGINS="https://luisjcm.com,https://www.luisjcm.com"
const ALLOWED_ORIGINS = (Deno.env.get("ALLOWED_ORIGINS") ??
  "https://luisjcm.com,https://www.luisjcm.com,http://localhost:5173")
  .split(",").map((o) => o.trim()).filter(Boolean);

const MODEL = "openai/gpt-oss-20b";
const MAX_OUTPUT_TOKENS = 350;

// Rate limit en memoria por IP (best-effort: cada instancia de la función tiene su propio contador).
// Para un límite estricto usa una tabla en Supabase o Upstash Redis.
const WINDOW_MS = 60_000;
const MAX_REQ_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // evita crecimiento sin límite
  return recent.length > MAX_REQ_PER_WINDOW;
}

function corsFor(origin: string | null) {
  return {
    "Access-Control-Allow-Origin": origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

// Mismo formato que la API (choices[0].message.content) para no romper el cliente.
const asReply = (text: string) => ({ choices: [{ message: { role: "assistant", content: text } }] });

export default {
  async fetch(req: Request) {
    const origin = req.headers.get("origin");
    const cors = corsFor(origin);
    const json = (body: unknown, status = 200) =>
      new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
    if (req.method !== "POST") return json({ error: "Método no permitido" }, 405);

    // 1. Solo orígenes propios (frena otros sitios; no frena curl, para eso están el rate limit y los demás controles).
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) return json({ error: "Origen no permitido" }, 403);

    // 2. Rate limit por IP.
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    if (rateLimited(ip)) {
      return json(asReply("Vas muy rápido 😅 Dame un minuto y seguimos."), 429);
    }

    try {
      const body = await req.json().catch(() => null);
      // 3. El cliente NO controla el system prompt ni los roles: se sanea todo.
      const history = sanitizeMessages(body?.messages);
      if (!history) return json({ error: "Solicitud inválida" }, 400);

      // 4. Guardrail de entrada: responde sin gastar tokens si es off-topic / inyección.
      const lastUser = history[history.length - 1].content;
      const inVerdict = checkInput(lastUser);
      if (!inVerdict.ok) {
        console.log(JSON.stringify({ blocked: "input", reason: inVerdict.reason }));
        return json(asReply(inVerdict.reply));
      }

      const apiKey = Deno.env.get("GROQ_API_KEY");
      if (!apiKey) {
        console.error("GROQ_API_KEY no configurada");
        return json({ error: "Servicio no disponible" }, 500);
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: MODEL,
          // 5. El system prompt vive SOLO en el servidor.
          messages: [{ role: "system", content: CUBOT_SYSTEM_PROMPT }, ...history],
          temperature: 0.3,
          max_tokens: MAX_OUTPUT_TOKENS,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Groq error:", data?.error?.message);
        return json({ error: "Servicio no disponible" }, 502);
      }

      // 6. Guardrail de salida: si el modelo igual soltó código o filtró el prompt, se reemplaza.
      const text: string = data?.choices?.[0]?.message?.content ?? "";
      const outVerdict = checkOutput(text);
      if (!outVerdict.ok) {
        console.log(JSON.stringify({ blocked: "output", reason: outVerdict.reason }));
        return json(asReply(outVerdict.reply));
      }
      return json(asReply(outVerdict.text));
    } catch (error) {
      console.error("cubot-proxy:", error); // el detalle va al log, no al cliente
      return json({ error: "Servicio no disponible" }, 500);
    }
  },
};
