// built-ins
import { Router } from "@tanstack/react-router";

// routes
import { rootRoute } from "../App";
import { homeRoute } from "../pages/Home";
import { chatRoute } from "../pages/Chat";
import { notFoundRoute } from "../pages/NotFound";

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, chatRoute, notFoundRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

export default router;
