import "@supabase/functions-js/edge-runtime.d.ts";

// Cabeceras CORS obligatorias y súper permisivas para evitar bloqueos
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default {
  async fetch(req: Request) {
    // 1. Responder inmediatamente a la solicitud previa del navegador (Preflight OPTIONS)
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    try {
      const { messages } = await req.json();

      const apiKey = Deno.env.get('GROQ_API_KEY');
      if (!apiKey) {
        throw new Error('La API Key de Groq no está configurada en el servidor.');
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages,
          temperature: 0.7
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Fallo interno en la API de Groq');
      }

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      });

    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      });
    }
  }
};