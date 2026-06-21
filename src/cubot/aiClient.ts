import Groq from "groq-sdk";
import { CUBOT_SYSTEM_PROMPT } from "./systemPrompt";

// Inicializamos el SDK de Groq
const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });

export const getAIResponse = async (prompt: string) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: CUBOT_SYSTEM_PROMPT
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.1-8b-instant", // Usamos el modelo rápido y potente de Meta
      temperature: 0.5,
    });

    return chatCompletion.choices[0]?.message?.content || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error conectando con la IA:", error);
    return "Lo siento, mis circuitos cognitivos están en mantenimiento. Por favor, intenta de nuevo más tarde.";
  }
};