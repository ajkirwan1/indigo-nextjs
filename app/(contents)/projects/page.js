/** @format */

import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";

function ProjectItem({ data }) {
  return (
    <Link href={`projects/${data.id}`}>
      <div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={data.image}
            alt="alt"
            width={750}
            height={500}
          />
        </div>
        <h2>{data.title}</h2>
        <p>Location - {data.location}</p>
        <p>Investment return - {data.investmentReturn}</p>
        <p>{data.opening}</p>
      </div>
    </Link>
  );
}

export default async function ProjectsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className={classes.header}>
        <h1>OUR PROJECTS</h1>
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
