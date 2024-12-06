/** @format */

import Image from "next/image";
import classes from "./page.module.css";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { createClient } from "contentful";


console.log(process.env.CONTENTFUL_SPACE_ID)
console.log(process.env.CONTENTFUL_ACCESS_TOKEN)

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getBlogEntries = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries;
};

async function BlogItem({ blogData }) {
  const { title, subTitle, publishDate, primaryImage, author, slug } =
    blogData.fields;

  return (
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
        </div>

        <h2>{title}</h2>
        <p>{subTitle}</p>
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
          <div className={classes.hiddenContainer}>
            <Link href={`blog/${slug}`}>Read more</Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const blogEntries = await getBlogEntries();
  return (
    <>
      <title>INDIGO Consulting NEWS Page</title>
      <div className={classes.header}>
        <h1>NEWS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {blogEntries.items.map((element) => (
            <li key={element.title}>
              <BlogItem blogData={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// export async function generateStaticParams() {
//   const queryOptions = {
//     content_type: "blogPost",
//     select: "fields.slug",
//   };
//   const articles = await client.getEntries(queryOptions);
//   return articles.items.map((article) => ({
//     slug: article.fields.slug,
//   }));
// }
