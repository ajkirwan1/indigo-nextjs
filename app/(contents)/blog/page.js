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
  console.log("call");
  return entries;
};

async function Blog({ blogData }) {
  const blogEntries = await getBlogEntries();
  console.log(blogEntries.items);
  blogEntries.items.map((item) => {
    const { title } = item.fields;
    console.log(title);
  });

  return (
    <>
      <div className={classes.imageContainer}>
        <div>
          <Image
            key={blogData.image}
            className={classes.image}
            src={blogData.image}
            alt="alt"
            width={750}
            height={500}
          />
          <h2>{blogData.title}</h2>
          <p>{blogData.description}</p>
          <p>{blogData.date}</p>
          <div className={classes.avatarAuthorContainer}>
            <div className={classes.avatarAuthor}>
              <Avatar
                src="/images/pages/who-we-are/emanfinal.jpg"
                color="default"
                size="md"
                // color="primary"
                // radius="sm"
                isBordered
                // size="lg"
              />
              <p>By {blogData.author}</p>
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

export default function BlogPage() {
  return (
    <>
      <title>INDIGO Consulting NEWS Page</title>
      <div className={classes.subHeader}>
        <h1> INDIGO'S NEWS</h1>
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {blogData.map((element) => (
            <li key={element.title}>
              <Blog blogData={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
