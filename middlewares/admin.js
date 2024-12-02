import { NextResponse } from "next/server";

export const adminRedirect = (request) => {
  const { pathname } = request.nextUrl;
  return async (request, event) => {
    if (pathname.contains("admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next({ request });
  };
};
