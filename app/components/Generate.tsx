import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet } from "lucide-react";
import { FaRegFileAlt } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";

export const Generate = () => {
  return (
    <Card className="h-fit w-[50%]">
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
          <Input placeholder="Enter a title for your article..." />
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          <p className="flex items-center gap-1 text-[#71717A] text-[14px]">
            <FaRegFileAlt />
            Article Content
          </p>
          <Textarea placeholder="Paste your article content here..." />
        </div>
      </CardContent>
      <CardFooter className="flex self-end">
        <Button>Generate summary</Button>
      </CardFooter>
    </Card>
  );
};
