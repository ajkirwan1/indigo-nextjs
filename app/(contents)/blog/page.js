/** @format */

import Image from "next/image";
import { blogData } from "@/data/blog-data";
import classes from "./page.module.css";
import { Avatar } from "@nextui-org/react";
import image from "/public/images/pages/who-we-are/emanfinal.jpg";
import Link from "next/link";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries;
};

async function Blog({ blogData }) {
  const { title, subTitle, publishDate, primaryImage, author } =
    blogData.fields;

  return (
    <>
      <div className={classes.imageContainer}>
        <div>
          <Image
            key={blogData.image}
            className={classes.image}
            src={`https:${primaryImage.fields.file.url}`}
            alt="alt"
            width={750}
            height={500}
          />
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <p>{publishDate}</p>
          <div className={classes.avatarAuthorContainer}>
            <div className={classes.avatarAuthor}>
              <Avatar
                src="/images/pages/who-we-are/emanfinal.jpg"
                color="default"
                size="md"
                isBordered
              />
              <p>By {author}</p>
            </div>

            <div className={classes.hiddenContainer}>
              <Link href={`blog/${blogData.id}`}>Read more</Link>
            </div>
          </div>
        </div>
        {/* <button onClick={handleCall}></button> */}
      </div>
    </>
  );
}

export default async function BlogPage() {
  const blogEntries = await getBlogEntries();
  // console.log(blogEntries.items);
  blogEntries.items.map((item) => {
    const { primaryImage } = item.fields;
    console.log(primaryImage, "IMAGE");
  });
  return (
    <>
      <title>INDIGO Consulting Blog Page</title>
      <div className={classes.subHeader}>
        <h1>Blogs</h1>
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {blogEntries.items.map((element) => (
            <li key={element.title}>
              <Blog blogData={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
