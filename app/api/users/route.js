/** @format */
import sqlite from "better-sqlite3";
import { headers } from "next/headers";

export const db = sqlite("main.db");

export async function GET(request) {
  // return Response.json();
  //   return new Response("GET user resonse!");

  const items = await db.prepare("SELECT * FROM user").all();

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

// export function POST(request) {}
