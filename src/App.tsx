import { Outlet, RootRoute } from "@tanstack/react-router";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

// Create a root route
export const rootRoute = new RootRoute({ component: App });

export default App;
