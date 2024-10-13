/** @format */

import Database from "better-sqlite3";
const db = new Database("main.db");

import { generateId } from "lucia";
import { hash } from "@node-rs/argon2";

const pdf1Id = generateId(15);
const pdf2Id = generateId(15);
const pdf3Id = generateId(15);

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
    access_request_date: new Date(2022, 8, 10).toJSON().slice(0, 10),
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
    first_name: "john",
    last_name: "smith",
    email: "property@123.com",
    admin_access: 0,
    property_access: 1,
    consulting_access: 0,
    access_request_date: new Date(2020, 1, 24).toJSON().slice(0, 10),
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
    first_name: "pete",
    last_name: "burns",
    email: "consulting@123.com",
    admin_access: 0,
    property_access: 1,
    consulting_access: 0,
    access_request_date: new Date(2024, 1, 1).toJSON().slice(0, 10),
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
    first_name: "mick",
    last_name: "jackson",
    email: "user@123.com",
    admin_access: 0,
    property_access: 0,
    consulting_access: 0,
    access_request_date: new Date().toJSON().slice(0, 10),
    password_hash: await hash("password123", {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    }),
  },
];

const propertiesSeedData = [
  { id: generateId(15), name: "pic1", slug: "entrance", pdf_id: pdf1Id },
  { id: generateId(15), name: "pic2", slug: "final", pdf_id: pdf2Id },
  { id: generateId(15), name: "pic3", slug: "pool", pdf_id: pdf3Id },
];

const pdfSeedData = [{ id: pdf1Id }, { id: pdf2Id }, { id: pdf3Id }];

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

db.exec(`CREATE TABLE IF NOT EXISTS pdfs (
  id TEXT NOT NULL PRIMARY KEY
)`);

db.exec(`CREATE TABLE IF NOT EXISTS properties (
  id TEXT NOT NULL PRIMARY KEY,
  name INTEGER NOT NULL,
  slug TEXT UNIQUE,
  pdf_id TEXT NOT NULL,
  FOREIGN KEY (pdf_id) REFERENCES pdfs(id)
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
const properties = db.prepare("SELECT * FROM properties").all();
const pdfs = db.prepare("SELECT * FROM pdfs").all();


if (pdfs.length === 0) {
  async function initPdfs() {
    const stmtPdfs = db.prepare(`
          INSERT INTO pdfs VALUES (
             @id
          )
       `);

    for (const pdf of pdfSeedData) {
      stmtPdfs.run(pdf);
    }
  }
  initPdfs();
}



if (properties.length === 0) {
  async function initProperties() {
    const stmtProperties = db.prepare(`
              INSERT INTO properties VALUES (
                 @id,
                 @name,
                 @slug,
                 @pdf_id
              )
           `);

    for (const properties of propertiesSeedData) {
      stmtProperties.run(properties);
    }
  }
  initProperties();
}

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
