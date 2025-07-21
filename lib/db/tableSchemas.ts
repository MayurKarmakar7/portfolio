import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const visitors = pgTable("visitors", {
  id: uuid("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type visitors = typeof visitors.$inferSelect;
