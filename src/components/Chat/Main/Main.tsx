import { Input } from "@/components/ui/input";
import { NavBar } from "..";
import { Prompts } from "../Prompts";
import { ImagePlus, Mic } from "lucide-react";

export const Main = () => {
  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <div className="w-full h-full flex flex-col mx-auto text-white bg-zinc-900">
        <div className="container max-w-5xl my-10 mb-20">
          <h1 className="gradient text-6xl">Hello, Zehan .</h1>
          <h2 className="text-6xl text-zinc-600">How can I help you today?</h2>
        </div>
        <Prompts />
        <div className="container flex flex-col justify-end h-full w-9/12 my-10 ">
          <div className="relative flex items-center max-w-5xl">
            <Input
              placeholder="Enter your prompt here..."
              value={""}
              className=" pl-7 p-9 rounded-full border-transparent bg-zinc-800/70 focus:bg-zinc-700/40 placeholder:text-white/75 placeholder:text-base"
            />
            <div className="absolute flex gap-2 right-12 cursor-pointer top-1/2  -translate-y-1/2 transform">
              <ImagePlus className="w-12 h-12 rounded-full hover:bg-zinc-700/90 p-3" />
              <Mic className="w-12 h-12 rounded-full hover:bg-zinc-700/90 p-3" />
            </div>
          </div>
          <p className="text-xs mt-4 flex justify-center text-white/75" style={{wordSpacing:"2px"}}>
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <p className="underline pl-2">Your privacy & Gemini Apps</p>
          </p>
        </div>
      </div>
    </div>
  );
};
