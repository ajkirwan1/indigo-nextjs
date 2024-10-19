import sql from "better-sqlite3";

const db = sql("main.db");

export async function getUser(id) {
    return db.prepare("SELECT * FROM user WHERE id = ?").get(id);
  }