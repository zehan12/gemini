// built-ins
import { Route } from "@tanstack/react-router";

// enums
import Routes from "../constants/routes.enum";

// routes
import { rootRoute } from "../App";
import { Main, SideBar } from "@/components/Chat";

function Chat() {
  return (
    <div className=" flex ">
      <SideBar />
      <Main />
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
