/** @format */
"use client";

import Image from "next/image";
import classes from "./page.module.css";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllBlogs } from "@/server/actions/contentful/get-all-blogs-action";
import Head from "next/head";

async function BlogItem({ blogData }) {
  const { title, publishDate, primaryImage, author, slug } = blogData.fields;

  return (
    <li>
      <Link href={`news/${slug}`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
        >
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={`https:${primaryImage.fields.file.url}`}
              alt={title}
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
                // size="md"
                className={classes.avatar}
                isBordered
              />
              <p>By {author}</p>
            </div>
          </div>
        </motion.div>
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
      <Head>
        <title>
          News | Indigo Consulting | Real Estate Insights & Updates in Greece
        </title>
        <meta
          name="description"
          content="Stay updated with the latest news from Indigo Consulting. Get insights into the Greek real estate market, luxury property trends, Golden Visa updates, redevelopment projects, and more. Stay informed with our expert industry analysis and news articles."
        />
        <meta
          name="keywords"
          content="real estate news Greece, Indigo Consulting news, Greece real estate updates, luxury real estate news, Golden Visa news Greece, redevelopment projects Greece, property market news Greece, real estate trends Greece, real estate industry news, Indigo Consulting updates, real estate consulting news, real estate investment news, Greece property market insights"
        />
      </Head>
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
