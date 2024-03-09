import { Input } from "@/components/ui/input";
import { NavBar } from "..";
import { Prompts } from "../Prompts";
import { ImagePlus, Mic, SendHorizontal } from "lucide-react";
import { useMutation } from "react-query";
import { useState } from "react";
import geminiGeneratedChat from "@/config/gemini";
import { Greeting } from "../Greeting";
import { EditPrompt } from "../EditPrompt";

export interface GeminiResponse {
  response: {
    candidates: {
      content: {
        parts: {
          text: string;
        };
      };
    }[];
  };
}

export const Main = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const createChat = async (prompt: string): Promise<GeminiResponse> => {
    const response = await geminiGeneratedChat(prompt);
    return response;
  };

  const { mutate, isLoading } = useMutation(createChat, {
    onSuccess: (data: GeminiResponse) => {
      const responseText =
        data?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
      setAnswer(responseText);
    },
    onError: (error: unknown) => {
      setError(error.response.data.msg);
      setTimeout(() => setError(""), 6000);
    },
  });

  const handleSubmit = async (e: React.MouseEvent) => {
    if (isLoading) return;
    e.preventDefault();
    console.log("clicked");
    mutate(prompt);
    // setPrompt("");
  };

  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <div className="w-full h-full flex flex-col mx-auto text-white bg-zinc-900">
        <EditPrompt />
        <Greeting />
        {!answer && <Prompts />}
        <div className="container relative flex justify-center items-center px-9 max-w-5xl">
          <p>
            Disclaimer: No copyright infringement intended. All rights belongs
            to the channel. Copyright disclaimer under section 107 of copyright
            act 1976, allowance is made for fair use "for purposes such as
            comment, news, reporting, criticism, teaching, scholarship and
            reporting. Fair use is use permitted by copyright statute that might
            otherwise infringing. Non profit, educational or personal use tips
            the balance in favour of copyright.
          </p>
        </div>

        <div className="container flex flex-col justify-end h-full w-9/12 my-10 ">
          <div className="relative flex items-center max-w-5xl">
            <Input
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className=" pl-7 p-9 rounded-full border-transparent bg-zinc-800/70 focus:bg-zinc-700/40 placeholder:text-white/75 placeholder:text-base"
            />
            <div
              className={`absolute flex gap-2 cursor-pointer top-1/2 -translate-y-1/2 transition-width duration-300 ease-in-out ${prompt ? "right-4" : "-right-10"}`}
            >
              <ImagePlus className="w-12 h-12 rounded-full hover:bg-zinc-700/90 p-3" />
              <Mic className="w-12 h-12 rounded-full hover:bg-zinc-700/90 p-3" />
              <SendHorizontal
                onClick={handleSubmit}
                className={`w-12 h-12 rounded-full hover:bg-zinc-700/90 p-3 transition-opacity duration-300 ease-in-out ${prompt ? "" : "invisible"} ${isLoading ? "text-gray-700 hover:text-gray-400 cursor-not-allowed" : ""}`}
              />
            </div>
          </div>

          <p
            className="text-xs mt-4 flex justify-center text-white/75"
            style={{ wordSpacing: "2px" }}
          >
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <p className="underline pl-2">Your privacy & Gemini Apps</p>
          </p>
        </div>
      </div>
    </div>
  );
};
