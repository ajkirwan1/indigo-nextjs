"use server";

import { getAllObjectsSignedUrlsS3 } from "@/server/actions/s3/images/get-all-images-s3";
// import { generateIdFromEntropySize } from "lucia";

export async function SubmitPropertyAction(data) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(data);
}
