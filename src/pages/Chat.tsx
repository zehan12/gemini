// built-ins
import { Route } from "@tanstack/react-router";

// enums
import Routes from "../constants/routes.enum";

// routes
import { rootRoute } from "../App";
import { SideBar } from "@/components/Chat";

function Chat() {
  return (
    <div className=" flex ">
      <SideBar />
      <div className="w-full bg-red-800">My Component</div>
    </div>
  );
}

// Chat route
export const chatRoute = new Route({
  component: Chat,
  getParentRoute: () => rootRoute,
  path: Routes.CHAT,
});

export default Chat;
