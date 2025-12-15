import { GoogleGenAI, Type } from "@google/genai";
import { INFORIVER_DOCS_URL } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface GenerateChapterParams {
  title: string;
  outline?: string;
  onProgress?: (message: string) => void;
}

export const generateChapterContent = async ({
  title,
  outline,
}: GenerateChapterParams): Promise<{ content: string; references: string[] }> => {
  try {
    // We use gemini-3-pro-preview with thinking budget for complex technical writing
    // combined with googleSearch to ground the content in the actual docs.
    const modelId = "gemini-3-pro-preview";

    const prompt = `
      You are an expert technical writer for Inforiver Analytics. 
      Your task is to write a comprehensive, accurate, and well-structured chapter titled "${title}".
      
      Requirements:
      1. Refer to the official Inforiver documentation (docs.inforiver.com/analytics+?fallback=true) concepts.
      2. Use strict technical accuracy.
      3. Format the output in clean Markdown.
      4. Include practical examples where applicable.
      5. Tone: Professional, Instructional, and Clear.
      ${outline ? `6. Follow this outline: ${outline}` : ''}

      This content is part of a book "Inforiver Analytics Book". The first 15 chapters are basic usage. 
      This chapter ("${title}") is likely an advanced topic.
      
      Structure the response with:
      - A clear Introduction
      - Key Concepts
      - Step-by-step guides/explanations
      - Best Practices
      - Summary
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 32768, // Max thinking for deep research and synthesis
        },
        tools: [{ googleSearch: {} }], // Grounding in real docs
      },
    });

    // Extract grounding metadata if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const references = groundingChunks
      .map(chunk => chunk.web?.uri)
      .filter((uri): uri is string => !!uri && uri.includes('inforiver'));

    const content = response.text || "# Error: No content generated.";

    return {
      content,
      references: Array.from(new Set(references)), // Dedupe
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate chapter content. Please check your API key and try again.");
  }
};

export const suggestOutline = async (title: string): Promise<string> => {
  try {
    // Faster model for outline suggestion
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Create a brief, bulleted outline for a technical documentation chapter titled "${title}" for Inforiver Analytics software. Return ONLY the markdown bullet points.`,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });
    return response.text || "- Introduction\n- Overview\n- Conclusion";
  } catch (error) {
    console.error("Outline generation error", error);
    return "- Introduction\n- Main Topic\n- Summary";
  }
};
