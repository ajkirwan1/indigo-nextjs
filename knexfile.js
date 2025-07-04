import "./loadEnv.js";

const branch = process.env.VERCEL_GIT_BRANCH;
const env = process.env.VERCEL_ENV;

let connectionString = process.env.POSTGRES_PRISMA_URL;

// 🔁 Override for staging only
if (branch === "staging" || env === "preview" && process.env.USE_STAGING_DB === "true") {
  connectionString = process.env.STAGING_POSTGRES_PRISMA_URL;
  console.log("🔁 Using STAGING database for Knex");
}

const config = {
  client: "pg",
  connection: connectionString,
};

export default config;
