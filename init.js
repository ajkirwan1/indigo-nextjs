/** @format */

import Database from "better-sqlite3";
const db = new Database("main.db");

import { generateId } from "lucia";
import { hash } from "@node-rs/argon2";

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

const userData = [
  {
    id: generateId(15),
    username: "admin123",
    first_name: "adam",
    last_name: "kirwan",
    email: "ajkirwan@123.com",
    admin_access: 1,
    property_access: 1,
    consulting_access: 1,
    access_request_date: new Date(2022, 8, 10).toJSON().slice(0,10),
    password_hash: await hash("password123", {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    }),

  },
  {
    id: generateId(15),
    username: "property123",
    first_name: "adam",
    last_name: "kirwan",
    email: "property@123.com",
    admin_access: 0,
    property_access: 1,
    consulting_access: 0,
    access_request_date: new Date(2020, 1, 24).toJSON().slice(0,10),
    password_hash: await hash("password123", {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    }),
  },
  {
    id: generateId(15),
    username: "consulting123",
    first_name: "adam",
    last_name: "kirwan",
    email: "consulting@123.com",
    admin_access: 0,
    property_access: 1,
    consulting_access: 0,
    access_request_date: new Date(2024, 1, 1).toJSON().slice(0,10),
    password_hash: await hash("password123", {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    }),
  },
  {
    id: generateId(15),
    username: "user123",
    first_name: "adam",
    last_name: "kirwan",
    email: "user@123.com",
    admin_access: 0,
    property_access: 0,
    consulting_access: 0,
    access_request_date: new Date(2019, 12, 3).toJSON().slice(0,10),
    password_hash: await hash("password123", {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    }),
  },
];

db.exec(`CREATE TABLE IF NOT EXISTS user (
    id TEXT NOT NULL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE,
    admin_access INTEGER,
    property_access INTEGER,
    consulting_access INTEGER,
    access_request_date TEXT,
    password_hash TEXT NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`);

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE
     )
 `
).run();

const projectData = db.prepare("SELECT * FROM projects").all();
const users = db.prepare("SELECT * FROM user").all();

if (projectData.length === 0) {
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
}

if (users.length === 0) {
  async function initUsers() {
    const stmt2 = db.prepare(`
              INSERT INTO user VALUES (
                 @id,
                 @username,
                 @first_name,
                 @last_name,
                 @email,
                 @admin_access,
                 @property_access,
                 @consulting_access,
                 @access_request_date,
                 @password_hash
              )
           `);

    for (const user of userData) {
      stmt2.run(user);
    }
  }
  initUsers();
}
