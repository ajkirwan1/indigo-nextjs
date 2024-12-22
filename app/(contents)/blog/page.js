/** @format */

import Image from "next/image";
import classes from "./page.module.css";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { getAllBlogs } from "@/server/actions/contentful/get-all-blogs-action";
// import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// const getBlogEntries = async () => {
//   // await new Promise((resolve) => setTimeout(resolve, 2000));
//   const entries = await client.getEntries({ content_type: "blogPost" });

//   return entries;
// };

async function BlogItem({ blogData }) {
  const { title, publishDate, primaryImage, author, slug } = blogData.fields;

  return (
    <li>
      <Link href={`blog/${slug}`}>
        <div>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={`https:${primaryImage.fields.file.url}`}
              alt="alt"
              width={750}
              height={500}
            />
            <div className={classes.backdropHover} />
          </div>
          <h2>{title}</h2>
          <p>{publishDate}</p>
          <div className={classes.avatarAuthorContainer}>
            <div className={classes.avatarAuthor}>
              <Avatar
                src="/images/pages/who-we-are/emanfinal.jpg"
                color="default"
                size="md"
                className={classes.avatar}
                isBordered
              />
              <p>By {author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default async function BlogPage() {
  const result = await getAllBlogs();
  if (result.error) {
    throw new Error(result.error.message);
  }

  return (
    <>
      <title>INDIGO Consulting NEWS Page</title>
      <div className="header">
        <h1>NEWS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {result.items.map((element) => (
            <BlogItem blogData={element} key={element.title} />
          ))}
        </ul>
      </div>
    </>
  );
}
