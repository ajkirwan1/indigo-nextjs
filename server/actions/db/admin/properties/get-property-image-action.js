/** @format */
"use server";

import { uploadPdfToS3 } from "@/server/actions/s3/pdfs/upload-pdf-to-s3";
import { uploadImageToS3 } from "@/server/actions/s3/upload-image-to-s3";
import { generateIdFromEntropySize } from "lucia";

export async function GetPropertyImageAction(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  console.log("GET AN IMAGE FROM S3");
}
