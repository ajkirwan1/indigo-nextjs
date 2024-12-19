/** @format */

import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getNewsEntries = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const newsEntries = await client.getEntries({ content_type: "project" });
  return newsEntries.items;
};

function ProjectItem({ data }) {
  const {
    title,
    thumbnailImage,
    investmentReturn,
    description,
    slug,
  } = data.fields;

  return (
    <Link href={`projects/${slug}`}>
      <div className={classes.ProjectItemWrapper}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={`https:${thumbnailImage.fields.file.url}`}
            alt="alt"
            width={800}
            height={600}
          />
        </div>
        <div className={classes.infoWrapper}>
          <h2>{title}</h2>
          <p>INVESTMENT RETURN - {investmentReturn}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function ProjectsPage() {
  const newsEntries = await getNewsEntries();
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className="header">
        <h1>SAMPLES OF PROJECTS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {newsEntries.map((element) => (
            <li key={element.id}>
              <ProjectItem data={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
