// import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { v4 as uuidv4 } from "uuid";

export async function uploadPdfToS3(formData, payload) {
  console.log(formData);
  console.log(payload);
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const { bucket, key } = payload;

  try {
    const files = formData.getAll("image");

    const response = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const fileUploadParams = {
          Bucket: bucket,
          Key: key,
          Body: buffer,
          ContentType: file.type,
        };

        console.log(fileUploadParams);

        const imageParam = new PutObjectCommand(fileUploadParams);
        await s3.send(imageParam);
      })
    );

    // revalidatePath("/");
    return response;
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    throw new Error("Failed to upload image to S3.");
  }
}
