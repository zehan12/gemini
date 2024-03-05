// built-ins
import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

// styles
import "./index.css";

// configs
import router from "./routes/router.tsx";

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
