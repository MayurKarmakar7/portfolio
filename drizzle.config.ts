import { type Config } from "drizzle-kit";


export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    host: "aws.connect.psdb.cloud",
    user: "e8s79le3fsdzaqtxj85y",
    password: "pscale_pw_2avdpEy5kcCV6Bm9ImKZblpwKg7GlPS0kPRsFM0yVOw",
    database: "portfolio",
  },
  tablesFilter: ["mayur_portfolio_*"],
} satisfies Config;
