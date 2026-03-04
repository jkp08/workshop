// Prisma 7 config – CLI loads this for schema path, migrations, and DATABASE_URL.
// See https://pris.ly/d/prisma-config
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
