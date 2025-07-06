// lib/loadEnv.js
import dotenv from "dotenv";
import { execSync } from "child_process";

// Detect Git branch name
let branchName = "";
try {
  branchName = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .trim();
} catch (e) {
  console.warn("⚠️ Could not determine Git branch. Falling back to NODE_ENV.");
}

// Determine the appropriate .env file
let envFile = ".env.development"; // fallback

if (branchName.includes("staging") || process.env.NODE_ENV === "staging") {
  envFile = ".env.staging";
} else if (process.env.NODE_ENV === "production") {
  envFile = ".env.production";
}

dotenv.config({ path: envFile });
console.log(`✅ Loaded environment variables from ${envFile}`);
