/** @format */

import { blogData } from "@/data/blog-data";
import classes from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import shareIcon from "/public/images/icons/icons8-share.svg"

  
export default function BlogPage({params}) {

const data = blogData[params.id - 1]

  return (
    <div className={classes.blogPost}>
    <title>{data.title}</title>
    <div className={classes.subHeader}>
    <h1>{data.title}</h1>
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
              <p>By {data.author}</p>
            </div>
    </div>
    <p>{data.date}</p>
   
    <section className={classes.openingSection}>
    <Image
            key={data.image}
            className={classes.image}
            src={data.image}
            alt="alt"
            width={750}
            height={500}
          />
           <p>{data.opening}</p>
    </section >
    <section className={classes.secondSection}>
      <h2>{data.primaryHeader}</h2>
      <p>{data.primaryParagraph}</p>
    </section>
    <section>
      <h2>{data.secondaryHeader}</h2>
      <p>{data.secondaryParagraph}</p>
    </section>
    <section className={classes.conclusion}>
      <p>CONCLUSION</p>
    </section>
    <Image src={shareIcon} alt="alt" width={25} height={25} />
    </div>
  );
}
