import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import shareIcon from "/public/images/icons/shareIcon.svg";
import { createClient } from "contentful";
import Link from "next/link";
import classes from "./news-item-vertical-list.module.css";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getBlogEntries = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries;
};

async function BlogItem({ blogData }) {
  const { title, subTitle, publishDate, primaryImage, author, slug } =
    blogData.fields;

  return (
    <Link href={`blog/${slug}`}>
      <div>
        <Image
          className={classes.image}
          src={`https:${primaryImage.fields.file.url}`}
          alt="alt"
          width={750}
          height={500}
        />
        <h2>{title}</h2>
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
          {/* <div className={classes.hiddenContainer}>
            <Link href={`blog/${slug}`}>Read more</Link>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default async function NewsItemVerticalList() {
  const blogEntries = await getBlogEntries();
  return (
    <>
      <div className={classes.verticalListContainer}>
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
