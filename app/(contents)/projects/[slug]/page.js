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

const fetchProjectPost = async (slug) => {
  const queryOptions = {
    content_type: "project",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);

  return queryResult.items[0];
};

export default async function Project(props) {
  const { params } = props;
  const { slug } = params;
  const { fields } = await fetchProjectPost(slug);

  const {
    title,
    thumbnailImage,
    secondaryImages,
    location,
    investmentReturn,
    description,
  } = fields;
  // console.log(thumbnailImage, "primary");

  let carouselImagesUrls = [];

  console.log(secondaryImages[0].fields.file.url, "secondary");

  Object.entries(secondaryImages).map((entry) => {
    carouselImagesUrls.push(entry[1].fields.file.url);
    // console.log(entry[1].fields.file.url);
  });

  console.log(carouselImagesUrls);

  // console.log(params)
  // const data = projectsData[params.id - 1];
  // console.log(data);

  // const { params } = props;
  // const { slug } = params;
  // const {fields} = await fetchBlogPost(slug)
  // const {title, subTitle, publishDate,author, location, primaryImage,mainParagraph } = fields

  return (
    <div className={classes.heroWrapper}>
      <ProjectCarousel images={carouselImagesUrls}>
        <div className={classes.titleHeader}>
          <h1>{title}</h1>
          <p>{description}</p>
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
