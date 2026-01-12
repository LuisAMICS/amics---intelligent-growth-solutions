import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("Gemini API Key is missing. Chat functionality will be disabled.");
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Using the Thinking model as requested
const MODEL_NAME = 'gemini-2.0-flash-thinking-exp-01-21';

export const sendChatMessage = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API not initialized due to missing key.");
    return "I'm currently offline (Configuration Error). Please check the system settings.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        // Thinking configuration is critical for complex queries
        thinkingConfig: { thinkingBudget: 1024 },
        // Do not set maxOutputTokens when using thinking budget with max value unless specifically needed to cap output
        // The prompt specifically says "Do not set maxOutputTokens".
      },
    });

    if (response.text) {
      return response.text;
    }
    return "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm experiencing a temporary connection issue. Please try again in a moment.";
  }
};