"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Bookmark, CircleCheck, CircleX, RotateCcw } from "lucide-react";
import { GiFlexibleStar } from "react-icons/gi";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type PropsType = {
  answers: number[];
  setQnum: Dispatch<SetStateAction<number>>;
  setAnswers: Dispatch<SetStateAction<number[]>>;
};
export const ResultQuiz = ({ answers, setQnum, setAnswers }: PropsType) => {
  const { article } = useAppContext();
  const router = useRouter();
  const [correct, setCorrect] = useState<number>(0);
  const counter = () => {
    let count = 0;
    answers.forEach((ele, i) => {
      if (String(answers[i]) === article?.article.quizzes[i].answer) {
        count++;
      }
    });
    setCorrect(count);
  };
  useEffect(() => {
    counter();
  }, []);
  return (
    <div className="h-fit min-w-200 w-[40%]">
      <div className="flex w-full justify-between">
        <h1 className="flex text-[24px] font-semibold items-center gap-2">
          <GiFlexibleStar />
          Quiz completed
        </h1>
      </div>
      <p className="text-[16px] font-normal text-[#71717A] mb-6">
        Let’s see what you did
      </p>
      <Card>
        <CardHeader>
          <CardDescription className="text-[#000000] font-medium text-2xl">
            Your score: {correct}{" "}
            <span className="text-base text-[#71717A]">/ 5</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-7">
          <div className="flex flex-col gap-5">
            {article?.article.quizzes.map((ele, i) => {
              return (
                <div key={i} className="flex gap-3">
                  {ele.answer == String(answers[i]) ? (
                    <CircleCheck className="text-[#22C55E]" />
                  ) : (
                    <CircleX className="text-[#B91C1C]" />
                  )}
                  <div>
                    <p className="text-[#737373] text-xs">
                      {i + 1}. {ele.question}
                    </p>
                    <p className="text-xs">
                      Your answer: {ele.options[answers[i]]}
                    </p>
                    {ele.answer != String(answers[i]) && (
                      <p className="text-xs text-[#22C55E]">
                        Correct: {ele.options[Number(ele.answer)]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-full gap-4">
            <Button
              onClick={() => {
                setQnum(0);
                setAnswers([]);
                setCorrect(0);
              }}
              variant={"outline"}
              className="flex flex-1"
            >
              <RotateCcw /> Restart quiz
            </Button>
            <Button
              onClick={() => {
                router.push("../");
                setAnswers([]);
              }}
              className="flex flex-1"
            >
              {" "}
              <Bookmark /> Save and leave
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
