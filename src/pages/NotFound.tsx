import { Route } from "@tanstack/react-router";
import { rootRoute } from "../App";
import Routes from "../constants/routes.enum";

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
    </>
  );
};

// Not Found route
export const notFoundRoute = new Route({
  component: NotFound,
  getParentRoute: () => rootRoute,
  path: Routes.NOT_FOUND,
});

export default NotFound;
