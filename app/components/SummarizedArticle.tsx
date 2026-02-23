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
import { FaRegFileAlt } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";
import { DialogSee } from "./DialogSee";

export const SummarizedArticle = () => {
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
            <h1 className="text-[24px] font-semibold">Genghis khan</h1>
            <p>
              Genghis Khan, born Temüjin around 1162, was the founder of the
              Mongol Empire. After his father's death, Temüjin's family was left
              in poverty, and he later killed his half-brother to secure his
              position. He built alliances with leaders like Jamukha and
              Toghrul, and despite being defeated in battle and briefly under
              the Jin dynasty, he rose to power by defeating rivals. By 1206,
              after overcoming the Naiman tribe and executing Jamukha, Temüjin
              became the undisputed ruler of the Mongol steppe, eventually
              leading a series of successful military campaigns that expanded
              his empire across China and Central Asia.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant={"outline"}>See content</Button> */}
          <DialogSee SeeType={false} />
          <Button>Generate quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
