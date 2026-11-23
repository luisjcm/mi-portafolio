// Guardrails de Cubot. Funciones puras (sin APIs de Deno) para poder probarlas con Node.
// Capas: 1) entrada (antes de gastar tokens)  2) prompt  3) salida (antes de mostrar).

export const MAX_INPUT_CHARS = 500;
export const MAX_HISTORY_MESSAGES = 8;

export const REFUSAL_OFF_TOPIC =
  "Soy Cubot y solo puedo hablar del perfil, proyectos y servicios de Luis 😉. " +
  "Para dudas de programación ya existen otras herramientas; yo te cuento qué puede construir Luis para ti. " +
  "¿Quieres conocer sus proyectos o escribirle a contacto@luisjcm.com?";

export const REFUSAL_INJECTION =
  "Eso no entra en mi configuración 🙂. Puedo contarte sobre la experiencia, el stack y los proyectos de Luis. ¿Por dónde empezamos?";

// ---------- Capa 1: entrada ----------

const ABOUT_LUIS = /\b(luis|portafolio|portfolio|cubot|este sitio|esta web|tu creador)\b/i;

// Intentos de manipular al bot / extraer el prompt.
const INJECTION = [
  /ignora\w*\s+(todas?\s+)?(las\s+)?(instrucciones|reglas|indicaciones)/i,
  /olvida\w*\s+(todas?\s+)?(las\s+)?(instrucciones|reglas|anteriores)/i,
  /(system|developer)\s*prompt/i,
  /prompt\s+(del\s+sistema|inicial|oculto)/i,
  /(muestra|revela|repite|imprime|dime)\w*\s+.{0,25}(tus\s+)?(instrucciones|reglas|prompt)/i,
  /\b(modo\s+(desarrollador|dev|dios|debug)|jailbreak|\bDAN\b)/i,
  /(act[uú]a|compórtate|comportate|finge|pretende)\s+(como|que)\s+(si\s+)?(eres|fueras|un|una)/i,
  /ignore\s+(all\s+)?(previous|prior|above)\s+instructions/i,
];

// Pedir que ESCRIBA / ARREGLE / EXPLIQUE código ajeno al portafolio.
const CODE_REQUEST = [
  /```/,
  /\b(escribe|escr[ií]beme|dame|gen[eé]ra(me)?|cr[eé]a(me)?|haz(me)?|programa|implementa|desarrolla|codifica|arregla|corrige|depura|optimiza|refactoriza|traduce|convierte)\b.{0,60}\b(c[oó]digo|funci[oó]n|script|algoritmo|query|consulta|regex|clase|componente|snippet|programa|endpoint|bot|app|aplicaci[oó]n|p[aá]gina|sitio)\b/i,
  /\b(ejemplo|snippet|muestra)\s+de\s+c[oó]digo\b/i,
  /\b(en|con|usando)\s+(python|java|c\+\+|c#|rust|golang|php|ruby|kotlin|swift|bash|powershell|sql)\b.{0,40}\b(escribe|haz|crea|dame|genera|c[oó]mo)\b/i,
  /\b(error|exception|traceback|stack\s*trace)\b.{0,80}\b(arregl|soluci|por qu[eé]|ayuda)/i,
];

// "¿Cómo hago X con git/docker/...?" sin relación con Luis o el portafolio.
const HOWTO_TECH =
  /\b(c[oó]mo|como)\b.{0,60}\b(git|github|docker|kubernetes|npm|pnpm|yarn|pip|python|sql|bash|linux|terminal|comando|merge|rebase|commit|push|pull|branch|rama|deploy|despliego|instalo|configuro)\b/i;
const TECH_COMMANDS = /\bgit\s+(add|commit|push|pull|merge|rebase|checkout|clone|stash|reset|init)\b/i;

export type InputVerdict =
  | { ok: true }
  | { ok: false; reason: "too_long" | "injection" | "off_topic"; reply: string };

export function checkInput(text: string): InputVerdict {
  if (text.length > MAX_INPUT_CHARS) {
    return { ok: false, reason: "too_long", reply: "¿Podrías resumir tu pregunta en un mensaje más corto? 🙂" };
  }
  if (INJECTION.some((r) => r.test(text))) {
    return { ok: false, reason: "injection", reply: REFUSAL_INJECTION };
  }
  const aboutLuis = ABOUT_LUIS.test(text);
  if (CODE_REQUEST.some((r) => r.test(text)) && !aboutLuis) {
    return { ok: false, reason: "off_topic", reply: REFUSAL_OFF_TOPIC };
  }
  if ((HOWTO_TECH.test(text) || TECH_COMMANDS.test(text)) && !aboutLuis) {
    return { ok: false, reason: "off_topic", reply: REFUSAL_OFF_TOPIC };
  }
  return { ok: true };
}

// ---------- Capa 3: salida ----------

const LEAK_MARKERS = [/REGLAS ESTRICTAS/i, /ESCALA DE AMOR/i, /EASTER EGGS/i, /TOLERANCIA CERO/i, /ANTIPARAB[OÓ]LICO/i, /ALCANCE ESTRICTO/i];
const CODE_LINE = /^\s*(\$\s|git\s|npm\s|pnpm\s|pip\s|sudo\s|import\s.+from|const\s+\w+\s*=|function\s+\w+\(|def\s+\w+\(|class\s+\w+|SELECT\s.+FROM|<\/?[a-z][\w-]*(\s[^>]*)?>)/i;

export type OutputVerdict = { ok: true; text: string } | { ok: false; reason: "code" | "leak"; reply: string };

export function checkOutput(text: string): OutputVerdict {
  if (LEAK_MARKERS.some((r) => r.test(text))) {
    return { ok: false, reason: "leak", reply: REFUSAL_INJECTION };
  }
  if (text.includes("```")) {
    return { ok: false, reason: "code", reply: REFUSAL_OFF_TOPIC };
  }
  const codeLines = text.split("\n").filter((l) => CODE_LINE.test(l)).length;
  if (codeLines >= 2) {
    return { ok: false, reason: "code", reply: REFUSAL_OFF_TOPIC };
  }
  return { ok: true, text };
}

// ---------- Saneado del historial (nunca confiar en el cliente) ----------

export type ChatMsg = { role: "user" | "assistant"; content: string };

export function sanitizeMessages(raw: unknown): ChatMsg[] | null {
  if (!Array.isArray(raw)) return null;
  const clean: ChatMsg[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") continue;
    const { role, content } = m as { role?: unknown; content?: unknown };
    // Se descarta cualquier rol "system"/"developer"/"tool" que envíe el cliente.
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    clean.push({ role, content: content.slice(0, MAX_INPUT_CHARS * 2) });
  }
  const recent = clean.slice(-MAX_HISTORY_MESSAGES);
  // El último mensaje debe ser del usuario.
  if (recent.length === 0 || recent[recent.length - 1].role !== "user") return null;
  return recent;
}
