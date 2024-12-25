/** @format */

import { createClient } from "contentful";

export async function getSingleBlog(slug) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const queryOptions = {
      content_type: "blogPost",
      "fields.slug[match]": slug,
    };
    const queryResult = await client.getEntries(queryOptions);
    return queryResult.items[0];
  } catch (error) {
    return { message: "An error occured fetching the news item"  };
  }
}
