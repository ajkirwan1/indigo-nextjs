/** @format */
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { getToken } from "next-auth/jwt"

const protectedRoutes = ["/admin"];
const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
  const session = await auth();

  const token= await getToken({ req, secret:process.env.AUTH_SECRET })
  console.log(token?.role, "ROLE")

  const { pathname } = req.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
