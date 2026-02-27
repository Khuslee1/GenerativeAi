import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  const { text }: { text: string } = await req.json();

  if (!text) {
    return new Response(JSON.stringify({ error: "Text is required" }), {
      status: 400,
    });
  }

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
    Given this article: ${text}

    Please provide two things:
    1. A concise summary of the article
    2. Generate 5 multiple choice questions

    Return in this exact JSON format:
    {
      "summary": "summary here",
      "questions": [
        {
          "question": "Question text here",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "answer": "0"
        }
      ]
    }
  `,
    });

    const cleanedJson = result.text?.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleanedJson ?? "");
    const summary = parsed.summary;
    const questions = parsed.questions;

    console.log("Summary:", summary);
    console.log("Questions:", questions);

    return new Response(JSON.stringify({ summary, questions }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
