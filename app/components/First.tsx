import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const First = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="h-fit w-100">
        <CardHeader className="gap-2">
          <CardDescription className="text-xl text-black font-semibold">
            Do you have an account?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <SignInButton />
          <SignUpButton>
            <button className="bg-black text-white rounded-sm font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </CardContent>
      </Card>
    </div>
  );
};
