/** @format */

// import sqlite from "better-sqlite3";

// export const db = sqlite("main.db");
// import { projectsSeedData } from "@/server/seed-data/projects";

const sql = require("better-sqlite3");
const db = sql("main.db");

const projectsSeedData = [
  { slug: "/carousel-images/entrance.jpg" },
  { slug: "/carousel-images/dinning.jpg" },
  { slug: "/carousel-images/bathroom.jpg" },
  { slug: "/carousel-images/bedroom.jpg" },
  { slug: "/carousel-images/pool.jpg" },
  { slug: "/carousel-images/csm-pool.jpg" },
  { slug: "/carousel-images/living-final.jpg" },
  { slug: "/carousel-images/living.jpg" },
  { slug: "/carousel-images/kitchen-final.jpg" },
];

db.exec(`CREATE TABLE IF NOT EXISTS user (
    id TEXT NOT NULL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`);

// db.exec(`CREATE TABLE IF NOT EXISTS projects (
//     id TEXT NOT NULL PRIMARY KEY,
//     slug TEXT NOT NULL UNIQUE
// )`);

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE
     )
 `
).run();

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO projects VALUES (
           null,
           @slug
        )
     `);

  for (const project of projectsSeedData) {
    stmt.run(project);
  }
}

initData();
