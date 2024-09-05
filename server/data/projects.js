/** @format */
import sql from "better-sqlite3";
const db = sql("main.db");

export async function getProjects() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("loading meals fails");
  return db.prepare("SELECT * FROM projects").all();
}

export function getProject(id) {
  return db.prepare("SELECT * FROM projects WHERE id = ?").get(id);
}
