"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Bookmark, CircleCheck, CircleX, RotateCcw } from "lucide-react";
import { useState } from "react";
import { GiFlexibleStar } from "react-icons/gi";
type MockType = { question: string; answer_user: string; answer_ai: string }[];
const MockData: MockType = [
  {
    question: "What was Genghis Khan’s birth name?",
    answer_user: "Toghrul",
    answer_ai: "Temüjin",
  },
  {
    question: "What was Genghis Khan’s birth name?",
    answer_user: "Toghrul",
    answer_ai: "Temüjin",
  },
  {
    question: "What was Genghis Khan’s birth name?",
    answer_user: "Toghrul",
    answer_ai: "Toghrul",
  },
  {
    question: "What was Genghis Khan’s birth name?",
    answer_user: "Toghrul",
    answer_ai: "Temüjin",
  },
  {
    question: "What was Genghis Khan’s birth name?",
    answer_user: "Toghrul",
    answer_ai: "Toghrul",
  },
];

export const ResultQuiz = () => {
  return (
    <div className="h-fit min-w-139.5 w-[30%]">
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
            Your score: 2 <span className="text-base text-[#71717A]">/ 5</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-7">
          <div className="flex flex-col gap-5">
            {MockData.map((ele, i) => {
              return (
                <div className="flex gap-3">
                  {ele.answer_ai == ele.answer_user ? (
                    <CircleCheck className="text-[#22C55E]" />
                  ) : (
                    <CircleX className="text-[#B91C1C]" />
                  )}
                  <div>
                    <p className="text-[#737373] text-xs">
                      {i + 1}. {ele.question}
                    </p>
                    <p className="text-xs">Your answer: {ele.answer_user}</p>
                    {ele.answer_ai != ele.answer_user && (
                      <p className="text-xs text-[#22C55E]">
                        Correct: {ele.answer_ai}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-full gap-4">
            <Button variant={"outline"} className="flex flex-1">
              <RotateCcw /> Restart quiz
            </Button>
            <Button className="flex flex-1">
              {" "}
              <Bookmark /> Save and leave
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
