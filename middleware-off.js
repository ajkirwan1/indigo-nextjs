/** @format */

import { NextResponse } from "next/server";
import { middleware as activeMiddleware } from "@/middleware/config";

export async function middleware(req) {
  const nextResponse = NextResponse.next();

  const middlewareHeader = [];

  const middlewareFunctions = activeMiddleware.map((fn) => fn(req));

  for (const middleware of middlewareFunctions) {
    const result = await middleware;
    console.log(result);

    if (!result.ok) {
      return result;
    }

    middlewareHeader.push(result.headers);
  }

  return nextResponse;
}

// export const config = {
//   matcher: "/projects",
// };
