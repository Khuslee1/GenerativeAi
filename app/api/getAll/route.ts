import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  const { userId } = await auth();

  if (!userId) throw Error();

  try {
    const articles = await prisma.article.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        title: true,
      },
    });
    return new Response(JSON.stringify({ articles }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
}
