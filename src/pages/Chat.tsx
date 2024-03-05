// built-ins
import { Route } from "@tanstack/react-router";

// enums
import Routes from "../constants/routes.enum";

// routes
import { rootRoute } from "../App";

function Chat() {
  return (
    <div style={{ display: "flex", height: "100vh", placeContent: "center" }}>
      <div>Chat Page</div>
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
