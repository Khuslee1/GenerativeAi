import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export const DialogSee = ({ SeeType }: { SeeType: boolean }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {!SeeType ? (
          <Button variant={"outline"}>See content</Button>
        ) : (
          <Button className="flex self-end" variant={"link"}>
            See more
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="flex flex-col gap-6 w-157"
        showCloseButton={false}
      >
        <DialogHeader className="w-full flex-row justify-between">
          <DialogTitle className="text-[24px] font-semibold">
            Genghis khan
          </DialogTitle>
          <DialogClose asChild>
            <Button variant={"outline"}>
              <X />
            </Button>
          </DialogClose>
        </DialogHeader>
        <DialogFooter className="flex">
          <p className="text-[14px]">
            Genghis Khan[a] (born Temüjin; c. 1162 – August 1227), also known as
            Chinggis Khan,[b] was the founder and first khan of the Mongol
            Empire. After spending most of his life uniting the Mongol tribes,
            he launched a series of military campaigns, conquering large parts
            of China and Central Asia. Born between 1155 and 1167 and given the
            name Temüjin, he was the eldest child of Yesugei, a Mongol chieftain
            of the Borjigin clan, and his wife Hö'elün. When Temüjin was eight,
            his father died and his family was abandoned by its tribe. Reduced
            to near-poverty, Temüjin killed his older half-brother to secure his
            familial position. His charismatic personality helped to attract his
            first followers and to form alliances with two prominent steppe
            leaders named Jamukha and Toghrul; they worked together to retrieve
            Temüjin's newlywed wife Börte, who had been kidnapped by raiders. As
            his reputation grew, his relationship with Jamukha deteriorated into
            open warfare. Temüjin was badly defeated in c. 1187, and may have
            spent the following years as a subject of the Jin dynasty; upon
            reemerging in 1196, he swiftly began gaining power. Toghrul came to
            view Temüjin as a threat and launched a surprise attack on him in
            1203. Temüjin retreated, then regrouped and overpowered Toghrul;
            after defeating the Naiman tribe and executing Jamukha, he was left
            as the sole ruler on the Mongolian steppe.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
