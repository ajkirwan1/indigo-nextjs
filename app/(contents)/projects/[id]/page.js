/** @format */
import { blogData } from "@/data/blog-data";
import classes from "./page.module.css";
import { createClient } from "contentful";
import { projectsData } from "@/data/projects-data";
import ProjectCarousel from "@/components/pages/projects/project-carousel";
import { propertyData } from "@/public/data/data";
import Link from "next/link";
import { redirect } from "next/navigation";

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
    <div className={classes.heroWrapper}>
      <ProjectCarousel images={propertyData}>
        <div className={classes.titleHeader}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <div className={classes.propertyInfo}>
          <h2>KEY FEATURES</h2>
          <ul>
            <li>
              <p>The most desirable location in the Athens Riviera</p>
            </li>
            <li>
              <p>High quality finish </p>
            </li>
            <li>
              <p>Panoramic view</p>
            </li>
            <li>
              <p>Stain-proof carpets in bedrooms</p>
            </li>
            <li>
              <p>Heated marble flooring</p>
            </li>
          </ul>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/projects">Back</Link>
        </div>
      </ProjectCarousel>
    </div>
  );
}
