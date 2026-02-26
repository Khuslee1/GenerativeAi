"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
export type questionType = {
  question: string;
  options: string[];
  answer: string;
}[];

export const Generate = () => {
  const { mainObj, setMainobj, handleSummarize, postFunction, result } =
    useAppContext();

  useEffect(() => {
    if (result) {
      postFunction();
    }
  }, [result]);

  return (
    <Card className="h-fit w-[50%] min-w-221.5">
      <CardHeader className="gap-2">
        <CardTitle className="flex text-[24px] font-semibold items-center gap-2">
          <GiFlexibleStar />
          Article Quiz Generator
        </CardTitle>
        <CardDescription className="text-[16px] font-normal text-[#71717A]">
          Paste your article below to generate a summarize and quiz question.
          Your articles will saved in the sidebar for future reference.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1 text-[#71717A] text-[14px]">
            <FaRegFileAlt />
            Article Title
          </p>
          <Input
            placeholder="Enter a title for your article..."
            onChange={(e) => {
              setMainobj((prev) => ({ ...prev, title: e.target.value }));
              console.log(mainObj);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          <p className="flex items-center gap-1 text-[#71717A] text-[14px]">
            <FaRegFileAlt />
            Article Content
          </p>
          <Textarea
            placeholder="Paste your article content here..."
            onChange={(e) => {
              setMainobj((prev) => ({ ...prev, text: e.target.value }));
              console.log(mainObj);
            }}
          />
        </div>
      </CardContent>
      <CardFooter className="flex self-end">
        <Button onClick={() => handleSummarize()}>Generate summary</Button>
      </CardFooter>
    </Card>
  );
};
