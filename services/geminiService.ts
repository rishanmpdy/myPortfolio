import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// FIX: Add generateDesignIdea function to be used by DesignIdeaGenerator component.
export const generateDesignIdea = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Generate a unique and creative design prompt for a UI/UX designer. The prompt should be a short sentence.',
    });
    return response.text;
  } catch (error) {
    console.error("Error generating design idea with Gemini:", error);
    throw new Error("Could not generate a design idea. Please check the console for details.");
  }
};

// FIX: Add editImageWithGemini function for the ImageEditor component.
export const editImageWithGemini = async (
  base64ImageData: string,
  mimeType: string,
  prompt: string,
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }

    throw new Error('No image data found in Gemini response.');
  } catch (error) {
    console.error('Error editing image with Gemini:', error);
    throw new Error('Could not edit image. Please check the console for details.');
  }
};
