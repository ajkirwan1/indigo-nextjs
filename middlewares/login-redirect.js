import { NextResponse } from "next/server";

export function loginRedirect(request) {
  return async (request, event) => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-current-path", request.nextUrl.pathname);
    requestHeaders.set("x-search-params", request.nextUrl.searchParams);

    return NextResponse.next({ request: { headers: requestHeaders } });
  };
}

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };
