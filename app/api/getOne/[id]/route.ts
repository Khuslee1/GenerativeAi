import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();

  if (!userId) throw Error();

  const { id } = await params;

  try {
    const article = await prisma.article.findUnique({
      where: {
        id: id,
      },
      include: {
        quizzes: true,
      },
    });
    return new Response(JSON.stringify({ article }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
}
