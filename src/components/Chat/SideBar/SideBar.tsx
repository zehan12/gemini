import { useState } from "react";
import { Button } from "../../ui/button";
import { HelpCircle, History, Settings } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const SideBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const handleToggle = () => {
    return setExpanded(!isExpanded);
  };
  return (
    <div
      className={`h-screen p-5 transition-width duration-300 ease-in-out bg-zinc-900/95 ${isExpanded ? "w-20" : "w-80"}`}
    >
      <div className="opacity-100 transition-opacity duration-300 ease-in-out">
        <Button
          className={`h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer ${isExpanded ? "rotate-90 transition-transform duration-75 ease-out" : ""}`}
          onClick={handleToggle}
        >
          |||
        </Button>
      </div>
      <div className="my-4 cursor-pointer">
        <div
          className={`flex gap-2 items-center w-10 h-10 rounded-full text-3xl text-gray-400 bg-zinc-900 hover:bg-slate-800/25 transition-width duration-300 ease-linear ${isExpanded ? "w-full justify-center" : " pl-3 w-32 justify-start gap-5"}`}
        >
          +{isExpanded ? "" : <p className="text-sm">New chat</p>}
        </div>
      </div>
      <div className="flex flex-col justify-end" style={{ height: "85%" }}>
        <div className="flex flex-col gap-6 p-2 text-white">
          <div className="flex justify-between">
            <p className="flex justify-start gap-2">
              <HelpCircle />
              {!isExpanded && <p>Help</p>}
            </p>
            <div
              className={`w-2 h-2 rounded-full bg-red-700 ${isExpanded ? "fixed" : ""}`}
            ></div>
          </div>
          <div className="flex justify-between">
            <p className="flex justify-start gap-2">
              <History />
              {!isExpanded && <p>Activity</p>}
            </p>
            <div
              className={`w-2 h-2 rounded-full bg-red-700 ${isExpanded ? "fixed" : ""}`}
            ></div>
          </div>
          <div className="flex justify-between">
            <p className="flex justify-start gap-2">
              <Settings />
              {!isExpanded && <p>Settings</p>}
            </p>
            <div
              className={`w-2 h-2 rounded-full bg-red-700 ${isExpanded ? "fixed" : ""}`}
            ></div>
          </div>
        </div>
        {!isExpanded && (
          <div className="flex flex-col gap-4 my-3">
            <span className="h-10 rounded-xl text-white text-sm flex justify-center items-center bg-gray-300/10 hover:bg-gray-500/50 cursor-pointer">
              Upgrade to Gemini Advanced
            </span>
            <div className="p-2">
              <p className="flex justify-start items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <p className="text-sm text-white">
                  Kunsthaus, Zürich, Switzerland
                </p>
              </p>
              <div className="pl-4 text-blue-300/90">
                <Link to="/chat" className="text-xs line-clamp-3 leading-5">
                  From your IP address • Update location
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
