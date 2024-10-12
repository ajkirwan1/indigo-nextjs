/** @format */
import sqlite from "better-sqlite3";
import { headers } from "next/headers";

export const db = sqlite("main.db");

export async function GET(request) {
  // return Response.json();
  //   return new Response("GET user resonse!");

  const items = await db.prepare("SELECT id, username, first_name, last_name, email, property_access, consulting_access, access_request_date FROM user").all();

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}