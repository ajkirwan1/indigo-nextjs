/** @format */
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
// import { auth } from "./auth";

const protectedRoutes = ["/admin", "/properties"];
const { auth } = NextAuth(authConfig);

// export default NextAuth(authConfig).auth;

export async function middleware(request) {
  const session = await auth();
  const token = await auth();

  console.log(session, "SESSION");
  console.log(token, "TOKEN");
  const { pathname } = request.nextUrl;
  console.log(pathname, "PATHNAME");
  // const token = await getToken({ req: request, secret: process.env.SECRET });
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  console.log(isProtected, "PROTECTED");

  if (isProtected) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  // if (!token) return NextResponse.redirect(new URL("/login", request.url));

  // switch (token.role) {
  //   case 0:
  //     break;
  //   case 2:
  //     break;
  //   default:
  //     return NextResponse.redirect(new URL("/login", request.url));
  // }
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-current-path", request.nextUrl.pathname);
  // requestHeaders.set("x-search-params", request.nextUrl.searchParams);

  // return NextResponse.redirect(new URL('/blog', request.url))

  // return NextResponse.next({ request: { headers: requestHeaders } });
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
