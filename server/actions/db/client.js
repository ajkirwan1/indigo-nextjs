import sql from "better-sqlite3";

const db = sql("main.db");

export async function getUser(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return db.prepare("SELECT * FROM user WHERE id = ?").get(id);
  }