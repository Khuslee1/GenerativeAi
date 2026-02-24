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
    const [summaryResult, questionsResult] = await Promise.all([
      ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Please provide a concise summary of the following article: ${text}`,
      }),
      ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate 5 multiple choice questions based on this article: ${text}. Return the response in this exact JSON format:
        [
          {
            "question": "Question text here",
            "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
            "answer": "0"
          }
        ]
        Make sure the response is valid JSON and the answer is the index (0-3) of the correct option.`,
      }),
    ]);

    const summary = summaryResult.text;
    const questionsRaw = questionsResult.text ?? "";
    const cleanedJson = questionsRaw.replace(/```json|```/g, "").trim();
    const questions = JSON.parse(cleanedJson);

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
