import { GetObjectCommand } from "@aws-sdk/client-s3";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client } from "@aws-sdk/client-s3";

export async function getAllObjectsSignedUrlsS3({ Bucket }) {
  // console.log(Bucket);
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  try {
    // List all objects in the bucket
    const listCommand = new ListObjectsV2Command({ Bucket });
    // console.log(listCommand);
    const listObjectsOutput = await s3.send(listCommand);

    const signedUrls = await Promise.all(
      (listObjectsOutput.Contents || []).map(async (object) => {
        if (object.Key) {
          const getObjectCommand = new GetObjectCommand({
            Bucket,
            Key: object.Key,
          });
          const url = await getSignedUrl(s3, getObjectCommand, {
            expiresIn: 3600,
          });
          return { key: object.Key, url };
        }
        return null;
      })
    );

    // Filter out any null results (in case an object didn't have a Key for some reason)
    return signedUrls.filter((item) => item !== null);
  } catch (error) {
    console.error("Error retrieving objects from S3:", error);
    throw new Error("Failed to retrieve objects from S3.");
  }
}
