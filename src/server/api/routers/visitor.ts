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

  sendContactEmail: publicProcedure
    .input(
      z.object({
        userName: z.string().max(256),
        userEmail: z.string().email(),
        userMessage: z.string().min(1),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { userName, userEmail, userMessage } = input;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/send-contact-mail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            userEmail,
            userMessage,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error sending contact email:", error);
        throw new Error("Failed to send contact email");
      }
    }),
});

export type VisitorRouter = typeof visitorRouter;
