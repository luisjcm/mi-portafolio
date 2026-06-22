import "@supabase/functions-js/edge-runtime.d.ts";

// Cabeceras CORS obligatorias para que tu navegador no bloquee la petición
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

export default {
  async fetch(req: Request) {
    // 1. Manejo de la petición de pre-vuelo (Preflight) de CORS
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    try {
      // 2. Recibe el historial de mensajes que le envía tu portafolio
      const { messages } = await req.json();

      // 3. Extrae la API Key de Groq de los secretos SEGUROS del servidor
      // (VS Code puede subrayar 'Deno' en rojo, ignóralo, es normal)
      const apiKey = Deno.env.get('GROQ_API_KEY');
      if (!apiKey) {
        throw new Error('La API Key de Groq no está configurada en el servidor.');
      }

      // 4. Realiza la petición a Groq desde el servidor (tu llave no sale de aquí)
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages,
          temperature: 0.7
        })
      });

      const data = await response.json();

      // 5. Retorna la respuesta de Groq de vuelta a tu portafolio
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