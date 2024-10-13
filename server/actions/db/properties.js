/** @format */
import sql from "better-sqlite3";
const db = sql("main.db");

export async function getProperties() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("loading meals fails");
  return db.prepare("SELECT * FROM properties").all();
}

// export function getProject(id) {
//   return db.prepare("SELECT * FROM projects WHERE id = ?").get(id);
// }
