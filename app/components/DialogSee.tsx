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

type propsTypeDialog = {
  title: string | undefined;
  text: string | undefined;
};

export const DialogSee = ({ title, text }: propsTypeDialog) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>See content</Button>
      </DialogTrigger>
      <DialogContent
        className="flex flex-col gap-6 w-157"
        showCloseButton={false}
      >
        <DialogHeader className="w-full flex-row justify-between">
          <DialogTitle className="text-[24px] font-semibold">
            {title}
          </DialogTitle>
          <DialogClose asChild>
            <Button variant={"outline"}>
              <X />
            </Button>
          </DialogClose>
        </DialogHeader>
        <DialogFooter className="flex">
          <p className="text-[14px]">{text}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
