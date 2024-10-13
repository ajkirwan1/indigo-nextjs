/** @format */
"use server";
import sql from "better-sqlite3";
import { redirect } from "next/navigation";

const db = sql("main.db");

export async function AdminSubmit(initialState, formData) {
  const id = initialState.id;
  const consulting = formData.get("consulting") == "on" ?  2  : 4;
  const properties = formData.get("properties") == "on" ?  2  : 4;

  const user = db
    .prepare(
      `
        UPDATE user
        SET property_access = ? , consulting_access = ?
        WHERE id = ?
       `
    )
    user.run(properties, consulting, id);
    return redirect("/admin")
}
