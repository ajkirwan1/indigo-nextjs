"use server";
import db from "@/modules/db";
import { generateIdFromEntropySize } from "lucia";

export async function SubmitPropertyAction(data) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(data.pdfUrl.length);
  console.log(data.imageUrl.length);

  try {
    const user = await db.property2.create({
      data: {
        title: data.title,
        location: data.location,
        price: data.price,
        description: data.description,
        imageUrl: data.imageUrl,
        pdfUrl: data.pdfUrl,
      },
    });
  } catch (error) {
    // console.log(error);
  }
  const result = await db.property2.findMany();
  console.log(result);
}
