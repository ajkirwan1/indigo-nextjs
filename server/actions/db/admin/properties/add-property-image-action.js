/** @format */
"use server";

import { uploadPdfToS3 } from "@/server/actions/s3/pdfs/upload-pdf-to-s3";
import { uploadImageToS3 } from "@/server/actions/s3/upload-image-to-s3";
import { generateIdFromEntropySize } from "lucia";

export async function AddPropertyImageAction(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  console.log("TO ATTACH AN IMAGE");
}
