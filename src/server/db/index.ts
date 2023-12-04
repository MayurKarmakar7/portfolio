import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "~/env";
import * as schema from "./schema";

// const connection = connect({
//   host: env.DATABASE_URL,
//   username: "hs1cjp7z7gu4u2t007du",
//   password: "pscale_pw_SzJxA5N5iD8Ml0UnIfLFPApoiE9jhIJD1KSWG1C7FIA",
// });

export const db = drizzle(
  new Client({
    url: env.DATABASE_URL,
    username: "hs1cjp7z7gu4u2t007du",
    password: "pscale_pw_SzJxA5N5iD8Ml0UnIfLFPApoiE9jhIJD1KSWG1C7FIA",
  }).connection(),
  { schema },
);

// export const db = drizzle(connection, { schema });
