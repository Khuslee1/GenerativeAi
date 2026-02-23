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

export const SummarizedContent = () => {
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
          <div className="flex flex-col gap-1">
            {" "}
            <p className="flex items-center gap-1 text-[#71717A] text-[14px]">
              <FaRegFileAlt />
              Article Content
            </p>
            <p className="line-clamp-3">
              Genghis Khan[a] (born Temüjin; c. 1162 – August 1227), also known
              as Chinggis Khan,[b] was the founder and first khan of the Mongol
              Empire. After spending most of his life uniting the Mongol tribes,
              he launched a series of military campaigns, conquering large parts
              of China and Central Asia. Born between 1155 and 1167 and given
              the name Temüjin, he was the eldest child of Yesugei, a Mongol
              chieftain of the Borjigin clan, and his wife Hö'elün. When Temüjin
              was eight, his father died and his family was abandoned by its
              tribe. Reduced to near-poverty, Temüjin killed his older
              half-brother to secure his familial position. His charismatic
              personality helped to attract his first followers and to form
              alliances with two prominent steppe leaders named Jamukha and
              Toghrul; they worked together to retrieve Temüjin's newlywed wife
              Börte, who had been kidnapped by raiders. As his reputation grew,
              his relationship with Jamukha deteriorated into open warfare.
              Temüjin was badly defeated in c. 1187, and may have spent the
              following years as a subject of the Jin dynasty; upon reemerging
              in 1196, he swiftly began gaining power. Toghrul came to view
              Temüjin as a threat and launched a surprise attack on him in 1203.
              Temüjin retreated, then regrouped and overpowered Toghrul; after
              defeating the Naiman tribe and executing Jamukha, he was left as
              the sole ruler on the Mongolian steppe.
            </p>
            <DialogSee SeeType={true} />
          </div>
        </CardContent>
        <CardFooter className="flex self-start">
          <Button>Take quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
