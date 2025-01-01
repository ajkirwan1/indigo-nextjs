/** @format */

import { createClient } from "contentful";

export async function getSingleProject(slug) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  try {
    // throw Error
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const queryOptions = {
      content_type: "project",
      "fields.slug[match]": slug,
    };
    const queryResult = await client.getEntries(queryOptions);
    return queryResult.items[0];
  } catch (error) {
    return { message: "An error occured fetching the project item" };
  }
}
