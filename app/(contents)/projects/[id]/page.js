/** @format */

import { blogData } from "@/data/blog-data";
import classes from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import shareIcon from "/public/images/icons/shareIcon.svg";
import { createClient } from "contentful";
import { projectsData } from "@/data/projects-data";
import Carousel from "@/components/carousel";
import { propertyData } from "@/public/data/data";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

export default async function Project({ params }) {
  // console.log(params)
  const data = projectsData[params.id - 1];
  console.log(data);

  // const { params } = props;
  // const { slug } = params;
  // const {fields} = await fetchBlogPost(slug)
  // const {title, subTitle, publishDate,author, location, primaryImage,mainParagraph } = fields

  return (
    <div className={classes.blogPost}>
      <title>{data.title}</title>
      <div className={classes.header}>
        <h1>OUR PROJECTS</h1>
        <hr />
      </div>
      <section className={classes.openingSection}>
        <Link href={`${data.id}/images`}>
          <Image
            // key={data.image}
            className={classes.image}
            src={data.image}
            alt="alt"
            width={750}
            height={500}
          />
        </Link>

        <div className={classes.subHeader}>
          <h1>{data.title}</h1>
          <p>
            {data.dateStart} - {data.dateCompleted}
          </p>
          <div className={classes.avatarAuthor}>
            <Avatar src={data.image} color="default" size="md" isBordered />
          </div>
        </div>
      </section>
      <section className={classes.secondSection}>
        <h2>{data.description}</h2>
        <span>{data.opening}</span>
      </section>
      <section>
        <div className={classes.carouselContainer}>
          <Carousel images={propertyData} />
        </div>
      </section>
      <Image src={shareIcon} alt="alt" width={25} height={25} />
    </div>
  );
}
