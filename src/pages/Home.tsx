// built-ins
import { Route } from "@tanstack/react-router";

// enums
import Routes from "../constants/routes.enum";

// routes
import { rootRoute } from "../App";

function Home() {
  return (
    <div style={{ display: "flex", height: "100vh", placeContent: "center" }}>
      <div>Home Page</div>
    </div>
  );
}

// Index route
export const homeRoute = new Route({
  component: Home,
  getParentRoute: () => rootRoute,
  path: Routes.HOME,
});

export default Home;
