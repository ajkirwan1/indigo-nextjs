import { NextResponse, NextFetchEvent, NextRequest } from "next/server";

export function chain(functions, index = 0) {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return (request) => NextResponse.next({ request });
}
