/** @format */

import { createClient } from "contentful";

export async function getAllProjects() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const newsEntries = await client.getEntries({ content_type: "project" });
    const newsEntries = await client.getEntries({order: "fields.id", content_type: "project" });
    
    console.log(newsEntries.items)

    return newsEntries.items;
  } catch (error) {
    return { error: { message: "An error occured fetching the project data" } };
  }
}
