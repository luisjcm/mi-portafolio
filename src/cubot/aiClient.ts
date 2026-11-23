// src/cubot/aiClient.ts
// Apuntamos directamente a tu proxy seguro en Supabase
const SUPABASE_FUNCTION_URL = 'https://knbkpjffihzyfceytojr.supabase.co/functions/v1/cubot-proxy';

export const getAIResponse = async (messages: { role: string; content: string }[]) => {
  try {
    // El system prompt vive en el servidor (supabase/functions/cubot-proxy). Solo enviamos el historial reciente.
    const recent = messages.slice(-8);

    const response = await fetch(SUPABASE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY 
      },
      body: JSON.stringify({ messages: recent })
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor intermediario: ${response.statusText}`);
    }

    const data = await response.json();
    
    // 🛡️ ESCUDO: Si la API llega a fallar a futuro, manejamos el error elegantemente
    if (!data.choices || !data.choices[0]) {
      console.error("Detalles del error devuelto por la IA:", data.error || data);
      return "Mis circuitos de lenguaje están en mantenimiento en este momento. ¡Intenta contactar a Luis por correo o LinkedIn!";
    }

    // Devolvemos el texto de la IA al componente Chat.tsx
    return data.choices[0].message.content;
    
  } catch (error) {
    console.error("Error al comunicarse con el proxy de Cubot:", error);
    // En caso de que se caiga la red o Supabase
    return "Ups, mi conexión con el servidor principal se ha cortado. ¿Podrías intentarlo más tarde?";
  }
};