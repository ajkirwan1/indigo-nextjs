/** @format */

import classes from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { NewsletterFormAction } from "@/server/actions/forms/newsletter-form-action";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsletterForm from "@/components/forms/news/newsletter-form";
import ShareComponent from "@/components/share/share-component";
import { getAllBlogs } from "@/server/actions/contentful/get-all-blogs-action";
import { getSingleBlog } from "@/server/actions/contentful/get-single-blog-action";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.items.map((blog) => ({
    slug: blog.fields.slug,
  }));
}

function Success({ result }) {
  // console.log(result);
  const { fields } = result;
  const {
    title,
    subTitle,
    publishDate,
    author,
    slug,
    location,
    primaryImage,
    mainParagraph,
  } = fields;
  return (
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
  );
}

export default async function Page({ params }) {
  // const { params } = props;
  const { slug } = await params;
  const result = await getSingleBlog(slug);

  return (
    <>
      <title>Indigo Consulting News Item</title>
      <div className="header">
        <h1>NEWS</h1>
        <hr />
      </div>
      {result.message ? (
        <>
          <h2>Something went wrong!</h2>
          <div>
            <p>{result.message}</p>
          </div>
          <p>
            <Link href="/blog">Return to all news</Link>
          </p>
          <p>
            <Link href="/">Return to home page</Link>
          </p>
        </>
      ) : (
        <Success result={result} />
      )}
    </>
  );
}
