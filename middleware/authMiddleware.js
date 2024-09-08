/** @format */

import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

export default async function AuthMiddleware(req, res) {
  console.log("AUTH");
  return NextResponse.redirect(new URL("/login", req.url));
  // return NextResponse.next();
}
