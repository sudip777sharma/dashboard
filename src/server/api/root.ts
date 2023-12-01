import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { visDataRouter } from "./routers/visData";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  visData: visDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
