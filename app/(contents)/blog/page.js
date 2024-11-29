/** @format */

import Image from "next/image";
import classes from "./page.module.css";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { createClient } from "contentful";
import NewsItemFallback from "@/components/fallbacks/news/news-item-fallback";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries;
};

async function BlogItem({ blogData }) {
  const { title, subTitle, publishDate, primaryImage, author, slug } =
    blogData.fields;

  return (
    <div className={classes.imageContainer}>
      {/* <Link href={`blog/${slug}`}>
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
              <Link href={`blog/${slug}`}>Read more</Link>
            </div>
          </div>
        </div>
      </Link> */}
      <NewsItemFallback />
    </div>
  );
}

export default async function BlogPage() {
  const blogEntries = await getBlogEntries();
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
