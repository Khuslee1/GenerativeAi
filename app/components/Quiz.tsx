"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import { GiFlexibleStar } from "react-icons/gi";
import { DialoClose } from "./DialoClose";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import { ResultQuiz } from "./ResultQuiz";

export const Quiz = () => {
  const [Qnum, setQnum] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const { question } = useAppContext();

  const addQnum = () => setQnum((prev) => prev + 1);
  const saveAnswer = (ans: number) => setAnswers((prev) => [...prev, ans]);

  if (Qnum >= 5) {
    return <ResultQuiz answers={answers} setQnum={setQnum} />;
  }

  return (
    <div className="h-fit min-w-162.5 w-[40%]">
      <div className="flex w-full justify-between">
        <h1 className="flex text-[24px] font-semibold items-center gap-2">
          <GiFlexibleStar />
          Quick test
        </h1>
        <DialoClose />
      </div>
      <p className="text-[16px] font-normal text-[#71717A] mb-6">
        Take a quick test about your knowledge from your content
      </p>
      <Card>
        <CardHeader>
          <CardDescription className="text-[#000000] font-medium text-xl flex justify-between">
            {question[Qnum]?.question}
            <span className="w-12.5">
              {Qnum + 1} <span className="text-[#737373] text-base">/ 5</span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex gap-4 flex-wrap">
          {question[Qnum]?.options.map((ele, i) => (
            <Button
              key={i}
              variant={"outline"}
              onClick={() => {
                addQnum();
                saveAnswer(i);
                console.log(answers);
              }}
            >
              {ele}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
