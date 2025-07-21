import { z } from "zod";
import { publicProcedure, router } from "..";
import { db } from "@/lib/db";
import { visitors } from "@/lib/db/tableSchemas";

export const appRouter = router({
  sendContactMail: publicProcedure
    .input(
      z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email address"),
        message: z.string().min(1, "Message cannot be empty"),
      })
    )
    .mutation(async ({ input }) => {
      const { fullName, email, message } = input;

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/send-mail`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              email,
              message,
            }),
          }
        );

        if (!response.ok) {
          console.log("Failed to send email:", response.statusText);
          throw new Error("Failed to send email");
        }

        return {
          success: true,
        };
      } catch (error) {
        console.error("Error sending contact email:", error);
        return {
          success: false,
          error: "Failed to send email",
        };
      }
    }),
  saveContactMeDetails: publicProcedure
    .input(
      z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email address"),
        message: z.string().min(1, "Message cannot be empty"),
      })
    )
    .mutation(async ({ input }) => {
      const { fullName, email, message } = input;

      try {
        const { rows } = await db.insert(visitors).values({
          fullName,
          email,
          message,
        });

        if (rows.length === 0) {
          return {
            success: false,
            error: "Failed to save contact details",
          };
        }

        return {
          success: true,
        };
      } catch (error) {
        console.error("Error saving contact details:", error);
        return {
          success: false,
          error: "Failed to save contact details",
        };
      }
    }),
});

export type AppRouter = typeof appRouter;
