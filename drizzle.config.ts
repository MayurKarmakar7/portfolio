import { type Config } from "drizzle-kit";


export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    host: "aws.connect.psdb.cloud",
    user: "hs1cjp7z7gu4u2t007du",
    password: "pscale_pw_SzJxA5N5iD8Ml0UnIfLFPApoiE9jhIJD1KSWG1C7FIA",
    database: "portfolio",
  },
  tablesFilter: ["mayur_portfolio_*"],
} satisfies Config;
