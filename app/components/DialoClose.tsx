import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export const DialoClose = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex self-end" variant={"outline"} size={"icon"}>
          <X className="w-4 h-4 text-[#18181B]" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex flex-col gap-6 w-112.5"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">Are you sure?</DialogTitle>
          <DialogDescription className="text-[#B91C1C] text-sm">
            If you press 'Cancel', this quiz will restart from the beginning.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <DialogClose asChild>
            <Button className="flex-1">Go Back</Button>
          </DialogClose>
          <Button variant={"outline"} className="flex-1">
            Cancel quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
