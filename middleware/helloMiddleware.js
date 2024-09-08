/** @format */

import { NextRequest, NextResponse } from "next/server";

export default async function HelloMiddleware(req, res) {
  console.log("HELLO MIDDLEWARE");
  return NextResponse.next();
}
