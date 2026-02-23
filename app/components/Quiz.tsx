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
export const Quiz = () => {
  const [Qnum, setQnum] = useState<number>(1);
  const addQnum = () => {
    setQnum((prev) => prev + 1);
  };
  return (
    <div className="h-fit min-w-139.5 w-[30%]">
      <div className="flex w-full justify-between">
        <h1 className="flex text-[24px] font-semibold items-center gap-2">
          <GiFlexibleStar />
          Quick test
        </h1>
        <DialoClose />
      </div>
      <p className="text-[16px] font-normal text-[#71717A] mb-6">
        Take a quick test about your knowledge from your content{" "}
      </p>
      <Card>
        <CardHeader>
          <CardDescription className="text-[#000000] font-medium text-xl flex justify-between">
            Question
            <span>
              {Qnum} <span className="text-[#737373] text-base">/ 5</span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex gap-4">
          <div className="flex flex-1 flex-col gap-4">
            <Button variant={"outline"} onClick={addQnum}>
              yes
            </Button>
            <Button variant={"outline"} onClick={addQnum}>
              No
            </Button>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Button variant={"outline"} onClick={addQnum}>
              Yes/no
            </Button>
            <Button variant={"outline"} onClick={addQnum}>
              No/yes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
