// src/cubot/aiClient.ts
import { CUBOT_SYSTEM_PROMPT } from './systemPrompt';

// Apuntamos directamente a tu proxy seguro en Supabase
const SUPABASE_FUNCTION_URL = 'https://knbkpjffihzyfceytojr.supabase.co/functions/v1/cubot-proxy';

export const getAIResponse = async (messages: { role: string; content: string }[]) => {
  try {
    // Aseguramos de que el system prompt siempre sea el primer mensaje en el contexto
    const fullMessages = [
      { role: "system", content: CUBOT_SYSTEM_PROMPT },
      ...messages
    ];

    const response = await fetch(SUPABASE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY // Agrega esta línea por seguridad
      },
      body: JSON.stringify({ messages: fullMessages })
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor intermediario: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Devolvemos el texto de la IA al componente Chat.tsx
    return data.choices[0].message.content;
    
  } catch (error) {
    console.error("Error al comunicarse con el proxy de Cubot:", error);
    throw error;
  }
};