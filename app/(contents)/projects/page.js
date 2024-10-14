/** @format */

import ProjectsGrid from "@/components/pages/projects/projects-grid";
import ProjectItem from "@/components/pages/projects/project-item";
import Image from "next/image";
import { getProjects } from "@/server/data/projects";
import Link from "next/link";
import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";

function ImageList(images) {
  const imageArray = images.images;
  return (
    <>
      <div className={classes.imageContainer}>
        {imageArray.map((element) => (
          <Link href="/" key={element.url}>
            <Image
              className={classes.image}
              src={element.url}
              alt="alt"
              width={750}
              height={500}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <div className={classes.subHeader}>
        <h1>Completed projects</h1>
      </div>

      <div>
        <ul>
          {projectsData.map((element) => (
            <li key={element.title}>
              <div className={classes.subHeader}>
                <h1>{element.title}</h1>
              </div>
              <ImageList images={element.images} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
