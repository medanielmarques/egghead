import { Kysely, PostgresDialect } from "kysely";
import { NeonDialect } from "kysely-neon";
import { customAlphabet } from "nanoid";
import { Pool } from "pg";
import ws from "ws";

import { type DB } from "./types";
export type { DB } from "./types";

export const db = new Kysely<DB>({
  dialect:
    process.env.NODE_ENV === "production"
      ? new NeonDialect({
          connectionString: process.env.DATABASE_URL,
          webSocketConstructor: ws,
        })
      : new PostgresDialect({
          pool: new Pool({
            connectionString: process.env.DATABASE_URL,
          }),
        }),
});

export const genId = (size?: number) =>
  customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", size ?? 12)();
