/** @format */
"use server";

// import { uploadPdfToS3 } from "@/server/actions/s3/pdfs/upload-pdf-to-s3";
// import { uploadImageToS3 } from "@/server/actions/s3/upload-image-to-s3";
import { getAllObjectsSignedUrlsS3 } from "@/server/actions/s3/images/get-all-images-s3";
// import { generateIdFromEntropySize } from "lucia";

export async function GetPropertyPdfAction(state, formData) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await getAllObjectsSignedUrlsS3({
    Bucket: process.env.AWS_BUCKET_NAME_PDF,
  });

  return result;
}
