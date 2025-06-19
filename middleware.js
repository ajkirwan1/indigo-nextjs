/** @format */

// export { auth as middleware } from "@/auth"
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/admin"];
const adminRedirectRoutes = ["/", "/contact"];

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
  // const session = await auth();

  // const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  // const token2 = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
  // console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
  // console.log(token, "token");
  // console.log(token2, "token2");
  // const { pathname } = req.nextUrl;

  // const shouldRedirectToAdmin =
  //   token?.role === "admin" &&
  //   adminRedirectRoutes.some(
  //     (route) => pathname === route || pathname.startsWith(route + "/")
  //   );

  // if (shouldRedirectToAdmin) {
  //   return NextResponse.redirect(new URL("/admin", req.nextUrl));
  // }

  // // const token= await getToken({ req, secret:process.env.AUTH_SECRET })

  // const isProtected = protectedRoutes.some((route) =>
  //   pathname.startsWith(route)
  // );

  // if (isProtected && token?.role !== "admin") {
  //   return NextResponse.redirect(new URL("/", req.nextUrl));
  // }
  return NextResponse.next();
});
