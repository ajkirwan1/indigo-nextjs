/** @format */
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { getToken } from "next-auth/jwt"
// import { auth } from "./auth";

const protectedRoutes = ["/admin"];
const { auth } = NextAuth(authConfig);

// export default NextAuth(authConfig).auth;

export default auth(async function middleware(req) {
  const session = await auth();
  const token = await auth();

  // console.log(token.role, "token");
  console.log(session, "session");
  const tokeny= await getToken({ req, secret:process.env.AUTH_SECRET })
  console.log(tokeny)

  const { pathname } = req.nextUrl;

  // const token = await getToken({ req: request, secret: process.env.SECRET });
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && tokeny?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
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
});
// export async function middleware(request) {
//   const session = await auth();
//   const token = await auth();

//   console.log(token, "token")
//   console.log(session, "session")

//   const { pathname } = request.nextUrl;

//   // const token = await getToken({ req: request, secret: process.env.SECRET });
//   const isProtected = protectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   // if (isProtected) {
//   //   return NextResponse.redirect(new URL("/login", request.nextUrl));
//   // }
//   // if (!token) return NextResponse.redirect(new URL("/login", request.url));

//   // switch (token.role) {
//   //   case 0:
//   //     break;
//   //   case 2:
//   //     break;
//   //   default:
//   //     return NextResponse.redirect(new URL("/login", request.url));
//   // }
//   // const requestHeaders = new Headers(request.headers);
//   // requestHeaders.set("x-current-path", request.nextUrl.pathname);
//   // requestHeaders.set("x-search-params", request.nextUrl.searchParams);

//   // return NextResponse.redirect(new URL('/blog', request.url))

//   // return NextResponse.next({ request: { headers: requestHeaders } });
//   return NextResponse.next();
// }

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
