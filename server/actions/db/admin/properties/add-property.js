/** @format */
"use server";

import { uploadImageToS3 } from "@/server/actions/s3/upload-image-to-s3";

export async function AddProperty(state, formData, data) {
  const image = formData.get("image");
  uploadImageToS3(formData, {
    bucket: process.env.AWS_BUCKET_NAME,
    key: `${Date.now()}`,
  });
  // console.log(image);
}
