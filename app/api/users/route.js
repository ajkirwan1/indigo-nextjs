/** @format */

import { headers } from "next/headers";

import db from "@/modules/db";

export async function GET(request) {
  // return Response.json();
  //   return new Response("GET user resonse!");

  const existingUsers = await db.user.findMany({
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      propertyaccess: true,
      consultingaccess: true,
      accessrequestdate: true,
    },
  });

  return new Response(JSON.stringify(existingUsers), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

// export function POST(request) {}
