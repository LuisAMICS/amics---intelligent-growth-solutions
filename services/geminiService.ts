import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using the Thinking model as requested
const MODEL_NAME = 'gemini-3-pro-preview';

export const sendChatMessage = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        // Thinking configuration is critical for complex queries
        thinkingConfig: { thinkingBudget: 32768 },
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