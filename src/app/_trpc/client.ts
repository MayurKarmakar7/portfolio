import { createTRPCReact } from "@trpc/react-query";
import { type VisitorRouter } from "~/server/api/routers/visitor";

export const trpc = createTRPCReact<VisitorRouter>();
