import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-white h-14 flex items-center justify-between px-8 border border-[#E4E4E7]">
      <h1 className="text-[24px] font-semibold font-sans">Quiz app</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
    </div>
  );
};
