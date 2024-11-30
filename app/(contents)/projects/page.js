/** @format */

import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ data }) {
  return (
    <Link href={`projects/${data.id}`}>
      <div>
        <Image
          // key={blogData.image}
          className={classes.image}
          src={data.image}
          alt="alt"
          width={750}
          height={500}
        />
        <h2>{data.title}</h2>
        <p>Location - {data.location}</p>
        <p>Investment return - {data.investmentReturn}</p>
        <p>{data.opening}</p>
      </div>
    </Link>
  );
}

export default async function ProjectsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className={classes.subHeader}>
        <h1>Completed projects</h1>
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
