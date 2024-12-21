/** @format */

import classes from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { NewsletterFormAction } from "@/server/actions/forms/newsletter-form-action";
import { createClient } from "contentful";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsletterForm from "@/components/forms/news/newsletter-form";
import ShareComponent from "@/components/share/share-component";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const fetchBlogPost = async (slug) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const queryOptions = {
    content_type: "blogPost",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

const getBlogEntries = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries;
};

export async function generateStaticParams() {
  const blogs = await getBlogEntries();
  return blogs.items.map((blog) => ({
    slug: blog.fields.slug,
  }));
}

export default async function Page({ params }) {
  // const { params } = props;
  const { slug } = await params;
  const { fields } = await fetchBlogPost(slug);
  const {
    title,
    subTitle,
    publishDate,
    author,
    location,
    primaryImage,
    mainParagraph,
  } = fields;

  return (
    <>
      <title>{title}</title>
      <div className="header">
        <h1>NEWS</h1>
        <hr />
      </div>
      <div className={classes.blogPost}>
        <div className={classes.column1}>
          <section className={classes.openingSection}>
            <h1>{title}</h1>
            <Link href={`${slug}/images`}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={`https:${primaryImage.fields.file.url}`}
                  alt="alt"
                  width={1000}
                  height={750}
                />
              </div>
            </Link>
            <div className={classes.subHeader}>
              <h1>{title}</h1>
              <p>{publishDate}</p>
              <div className={classes.avatarAuthor}>
                <Link href={`/who-we-are`}>
                  <Avatar
                    src="/images/pages/who-we-are/emanfinal.jpg"
                    color="default"
                    size="md"
                    isBordered
                    className={classes.avatar}
                  />
                  <div>
                    <p>By {author}</p>
                  </div>
                </Link>
              </div>
              <div className={classes.shareIconContainer}>
                <ShareComponent text={"TEST"} url={"TEST"} title={title} />
              </div>
            </div>
          </section>
          <section className={classes.secondSection}>
            <h2>{subTitle}</h2>
            <span>{documentToReactComponents(mainParagraph)}</span>
          </section>
          <section className={classes.thirdSection}>
            <h2>{subTitle}</h2>
            <span>{documentToReactComponents(mainParagraph)}</span>
          </section>
        </div>
        <div className={classes.column2}>
          <section className={classes.newsLetterSection}>
            <h2>NEWSLETTER</h2>
            <NewsletterForm action={NewsletterFormAction} />
          </section>
        </div>
      </div>
    </>
  );
}
