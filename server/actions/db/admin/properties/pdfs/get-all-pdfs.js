/** @format */

"use server";

import db from "@/modules/db";

export async function GetAllPdfs() {
  try {
    const allPdfs = await db.pdf.findMany({});

    return allPdfs;
  } catch (error) {
    console.log(error, "ERROR")
    return { dbError: "Something went wrong retrieving the data" };
  }
}
