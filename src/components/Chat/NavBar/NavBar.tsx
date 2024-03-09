import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { UserMenu } from "../UserMenu";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export const NavBar = () => {
  const [option, setOption] = useState("basic");
  return (
    <nav className="w-full h-20 flex justify-between items-center bg-zinc-900">
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
      <ThemeToggle />
      <UserMenu />
    </nav>
  );
};
