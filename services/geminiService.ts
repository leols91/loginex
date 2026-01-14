import { GoogleGenAI, Chat } from "@google/genai";
import { SUPPORT_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY not found in environment variables");
    // Fallback or error handling would go here usually
  }

  const ai = new GoogleGenAI({ apiKey: apiKey || '' });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SUPPORT_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToSupport = async (message: string): Promise<string> => {
  const chat = initializeChat();
  try {
    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro temporário no assistente. Por favor, tente novamente.";
  }
};
