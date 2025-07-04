// scripts/setup-db.js
import { execSync } from "child_process";
import "dotenv/config";

// --- Detect branch/environment ---
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.GIT_BRANCH || "";
const vercelEnv = process.env.VERCEL_ENV || "";
const isStaging = branch === "staging" || (vercelEnv === "preview" && process.env.USE_STAGING_DB === "true");
const isProduction = vercelEnv === "production";

console.log(`🧠 Detected branch: "${branch}" (${vercelEnv})`);
console.log(`📦 Using ${isStaging ? "STAGING" : "DEFAULT"} environment variables`);

// --- Set environment vars dynamically ---
process.env.POSTGRES_PRISMA_URL = isStaging
  ? process.env.STAGING_POSTGRES_PRISMA_URL
  : process.env.POSTGRES_PRISMA_URL;

process.env.POSTGRES_URL_NON_POOLING = isStaging
  ? process.env.STAGING_POSTGRES_URL_NON_POOLING
  : process.env.POSTGRES_URL_NON_POOLING;

// --- Run Prisma ---
if (isProduction) {
  console.log("🏗️ Running Prisma migrate deploy for PRODUCTION");
  execSync("npx prisma migrate deploy", { stdio: "inherit" });
} else {
  console.log("🚀 Running Prisma generate...");
  execSync("npx prisma generate", { stdio: "inherit" });
}

// --- Run Knex migrations ---
console.log("🛠️ Running Knex migrations...");
execSync("npm run db:migrate", { stdio: "inherit" });

// --- Run seeds (skip if staging or production) ---
if (!isStaging && !isProduction) {
  console.log("🌱 Seeding DB (non-staging, non-production)");
  execSync("knex seed:run --specific=seed_user", { stdio: "inherit" });
} else {
  console.log("🚫 Skipping seed on staging or production");
}

console.log("✅ Database setup complete.");
