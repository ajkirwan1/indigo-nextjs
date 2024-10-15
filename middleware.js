/** @format */
import { NextResponse } from "next/server";

export function middleware(request) {
  const requestHeaders  = new Headers(request.headers);
  requestHeaders.set("x-current-path", request.nextUrl.pathname);
  requestHeaders.set("x-search-params", request.nextUrl.searchParams);


  // const viewport = getViewportFromUserAgent(req.headers.get('user-agent'));

  // console.log(request.headers.get('user-agent'))
  return NextResponse.next({request: { headers: requestHeaders }});
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
