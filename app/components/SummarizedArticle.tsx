import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ChevronLeft } from "lucide-react";
import { GiFlexibleStar } from "react-icons/gi";
import { DialogSee } from "./DialogSee";
import { questionType } from "./Generate";
type propsType = {
  questions: questionType | undefined;
  summary: string;
  title: string | undefined;
  text: string | undefined;
};
export const SummarizedArticle = (props: propsType) => {
  return (
    <div className="h-fit w-[50%] min-w-221.5">
      <Button variant={"outline"}>
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
            <h1 className="text-[24px] font-semibold">{props.title}</h1>
            <p>{props.summary}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <DialogSee title={props.title} text={props.text} />
          <Button>Generate quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
