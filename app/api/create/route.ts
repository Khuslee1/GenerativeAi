import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

type questionType = {
  question: string;
  options: string[];
  answer: string;
};

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) throw Error();

  const {
    text,
    summary,
    title,
    questions,
  }: {
    text: string;
    summary: string;
    title: string;
    questions: questionType[];
  } = await req.json();
  try {
    const article = await prisma.article.create({
      data: {
        title,
        content: text,
        summary,
        userId,
        quizzes: {
          create: questions.map((q: questionType) => ({
            question: q.question,
            options: q.options,
            answer: q.answer,
          })),
        },
      },
      include: { quizzes: true },
    });

    return new Response(JSON.stringify({ id: article.id }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
