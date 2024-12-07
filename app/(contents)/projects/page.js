/** @format */

import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";

function ProjectItem({ data }) {
  return (
    <Link href={`projects/${data.id}`}>
      <div className={classes.ProjectItemWrapper}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={data.image}
            alt="alt"
            width={800}
            height={600}
          />
        </div>
        <div className={classes.infoWrapper}>
          <h2>{data.title}</h2>
          <p>LOCATION - {data.location}</p>
          <p>INVESTMENT RETURN - {data.investmentReturn}</p>
          <p>{data.opening}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function ProjectsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className={classes.header}>
        <h1>SAMPLES OF PROJECTS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {projectsData.map((element) => (
            <li key={element.id}>
              <ProjectItem data={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
