/** @format */

import { createClient } from "contentful";

export async function getAllBlogs() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const entries = await client.getEntries({ content_type: "blogPost" });

    return entries;
  } catch (error) {

    return { error: { message: "An error occured fetching the news data" } };
  }
}
