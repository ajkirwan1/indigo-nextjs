/** @format */

import { blogData } from "@/data/blog-data";
import classes from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import shareIcon from "/public/images/icons/icons8-share.svg";
import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const fetchBlogPost = async (slug) => {
  const queryOptions = {
    content_type: "blogPost",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);

  // console.log(queryResult.items[0], "MLD:DL:DS:LDS");
  return queryResult.items[0];
};

export default async function BlogPage(props) {
  const { params } = props;
  const { slug } = params;
  const {fields} = await fetchBlogPost(slug)
  const {title, subTitle, publishDate,author, location, primaryImage,mainParagraph } = fields 


  return (
    <div className={classes.blogPost}>
      <title>{title}</title>
      <section className={classes.openingSection}>
        <Image
          // key={data.image}
          className={classes.image}
          src={`https:${primaryImage.fields.file.url}`}
          alt="alt"
          width={750}
          height={500}
        />
        <div className={classes.subHeader}>
          <h1>{title}</h1>
          <p>{publishDate}</p>
          <div className={classes.avatarAuthor}>
            <Avatar
              src="/images/pages/who-we-are/emanfinal.jpg"
              color="default"
              size="md"
              isBordered
            />
            <p>By {author}</p>
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
      <section className={classes.conclusion}>
        <h2>{subTitle}</h2>
        <span>{documentToReactComponents(mainParagraph)}</span>
      </section>
      <Image src={shareIcon} alt="alt" width={25} height={25} />
    </div>
  );
}
