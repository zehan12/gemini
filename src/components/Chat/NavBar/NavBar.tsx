import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";

export const NavBar = () => {
  const [option, setOption] = useState("basic");
  return (
    <nav className="w-full h-12 flex justify-between items-center bg-zinc-900">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="bg-zinc-900 hover:bg-zinc-800 mx-4">ChatAI</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={option === "basic"}
            onCheckedChange={() => setOption("basic")}
          >
            Basic
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={option === "advance"}
            onCheckedChange={() => setOption("advance")}
            disabled
          >
            Advance
          </DropdownMenuCheckboxItem>{" "}
        </DropdownMenuContent>
      </DropdownMenu>
      <Avatar className="h-7 w-7 mx-4 cursor-pointer">
        <AvatarImage src="https://github.com/zehan12.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};
