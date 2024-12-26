/** @format */

import { createClient } from "contentful";

export async function getAllProperties() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const properties = await client.getEntries({ content_type: "property" });

    return properties.items;
  } catch (error) {
    return { errorMessage: "An error occured fetching the your properties" } ;
  }
}
