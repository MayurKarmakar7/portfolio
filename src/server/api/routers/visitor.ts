import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { visitors } from "~/server/db/schema";

export const visitorRouter = createTRPCRouter({
  addVisitor: publicProcedure
    .input(
      z.object({
        name: z.string().max(256),
        email: z.string().min(5),
        message: z.string().min(0),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.insert(visitors).values({
        name: input.name,
        email: input.email,
        message: input.message,
      });
    }),
});

export type VisitorRouter = typeof visitorRouter
