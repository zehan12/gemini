import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil } from "lucide-react";
import { useState } from "react";

export const EditPrompt = () => {
  const [prevPrompt, editPrevPrompt] = useState("This is my Prompt");
  const [isEdited, setEdited] = useState(false);
  return (
    <div className="container w-full max-w-4xl my-6">
      <div className="flex  items-center gap-2">
        <Avatar className="h-10 w-10 cursor-pointer border-[2px] border-transparent  hover:border-gray-400">
          <AvatarImage src="https://github.com/zehan12.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {isEdited ? (
          <>
            <div className="w-full">
              <Input
                onChange={(e) => editPrevPrompt(e.target.value)}
                className="h-12 max-w-4xl focus:border-blue-400"
                value={prevPrompt}
              />
            </div>
          </>
        ) : (
          <div className="h-12 flex items-center">
            <p>{prevPrompt}</p>
          </div>
        )}

        <Button
          onClick={() => setEdited(true)}
          className="w-10 h-10 rounded-full hover:bg-zinc-700/90 cursor-pointer p-2"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Pencil className="w-6 h-6" />
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xs">Edit text</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
      {isEdited && (
        <div className="flex items-center gap-3 p-5 mx-7">
          <Button
            onClick={() => setEdited(false)}
            variant="ghost"
            className="rounded-full text-blue-300 bg-transparent hover:text-blue-300 hover:bg-blue-800/20 border-none"
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            className="h-10 w-24 rounded-full text-gray-300 bg-gray-400/10 hover:text-blue-300 hover:bg-blue-800/20 border-none"
          >
            Update
          </Button>
        </div>
      )}
    </div>
  );
};
