"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ChevronLeft } from "lucide-react";
import { GiFlexibleStar } from "react-icons/gi";
import { DialogSee } from "./DialogSee";
import { useAppContext } from "../context/AppContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
export const SummarizedArticle = () => {
  const { getOne, article, loadingP } = useAppContext();
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getOne(id as string);
  }, [id]);

  if (loadingP)
    return (
      <div className="h-fit w-[50%] min-w-221.5">
        <Button
          variant={"outline"}
          onClick={() => {
            router.push("../");
          }}
        >
          <ChevronLeft />
        </Button>
        <Card className="h-fit w-[50%] min-w-221.5 mt-5">
          <CardHeader className="gap-2">
            <CardTitle className="flex text-[24px] font-semibold items-center gap-2">
              <GiFlexibleStar />
              Article Quiz Generator
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <Spinner className="size-8" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button disabled>Generate quiz</Button>
          </CardFooter>
        </Card>
      </div>
    );

  return (
    <div className="h-fit w-[50%] min-w-221.5">
      <Button
        variant={"outline"}
        onClick={() => {
          router.push("../");
        }}
      >
        <ChevronLeft />
      </Button>
      <Card className="h-fit w-[50%] min-w-221.5 mt-5">
        <CardHeader className="gap-2">
          <CardTitle className="flex text-[24px] font-semibold items-center gap-2">
            <GiFlexibleStar />
            Article Quiz Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-[#71717A] text-[14px]">
              <BookOpen className="w-4 h-4" />
              Summarized content
            </p>
            <h1 className="text-[24px] font-semibold">
              {article?.article.title}
            </h1>
            <p>{article?.article.summary}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <DialogSee
            title={article?.article.title}
            text={article?.article.content}
          />
          <Button onClick={() => router.push("../quiz")}>Generate quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
