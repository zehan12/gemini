// built-ins
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "@tanstack/react-router";

import ReactDOM from "react-dom/client";

// styles
import "./styles/global.css";

// configs
import router from "./routes/router.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>
);
