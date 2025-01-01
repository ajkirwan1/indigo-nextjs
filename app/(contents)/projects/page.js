/** @format */

import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/server/actions/contentful/get-all-projects";


function ProjectItem({ data }) {
  const { title, thumbnailImage, investmentReturn, description, slug } =
    data.fields;

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
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const result = await getAllProjects();

  if (result.error) {
    throw new Error(result.error.message);
  }

  
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className="header">
        <h1>SAMPLES OF PROJECTS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {result.map((element) => (
            <li key={element.id}>
              <ProjectItem data={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
