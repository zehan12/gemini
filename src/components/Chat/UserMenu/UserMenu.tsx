import { cn } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DollarSign,
  LogOut,
  Receipt,
  Settings,
  Store,
  Terminal,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-10 w-10 m-10 cursor-pointer border-[2px] border-transparent  hover:border-gray-400">
          <AvatarImage src="https://github.com/zehan12.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{"zehan"}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {"zehan9211@gmail.com"}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to={"/chat"} className="flex items-center">
              <Store className="mr-2 h-4 w-4" aria-hidden="true" />
              Stores
            </Link>
            <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/chat"} className="flex items-center">
              <Receipt className="mr-2 h-4 w-4" aria-hidden="true" />
              Billing
            </Link>
            <DropdownMenuShortcut>⇧⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/chat"} className="flex items-center">
              <User className="mr-2 h-4 w-4" aria-hidden="true" />
              Account
            </Link>
            <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/chat"} className="flex items-center">
              <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
              Settings
            </Link>
            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/chat"} className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" aria-hidden="true" />
              Purchases
            </Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={"/chat"} className="flex items-center">
              <Terminal className="mr-2 h-4 w-4" aria-hidden="true" />
              Admin Page
            </Link>
            <DropdownMenuShortcut>⇧⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link
            to={"/"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "start mr-2 w-full px-3"
            )}
          >
            <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
            Log Out
            <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
