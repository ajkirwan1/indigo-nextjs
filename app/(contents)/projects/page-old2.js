/** @format */

import { projectsData } from "@/data/projects-data";
import { projectsDatav2 } from "@/data/projects-data-v2";
import classes from "./page.module.css";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { propertyData } from "@/public/data/data";
import Link from "next/link";
import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";

function ProjectItem({ data }) {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.upperContainer}>
        <Image
          className={classes.image}
          src={data.image}
          alt="alt"
          width={750}
          height={500}
        />
        <div className={classes.infoContainer}>
          <h2>{data.title}</h2>
          <h3>{data.description}</h3>
        </div>
      </div>
      <div className={classes.lowerContainer}>
        <div className={classes.lowerContainerLeft}>
          <h2>KEY FEATURES</h2>
          <ul>
            <li>{data.feature1}</li>
            <li>{data.feature1}</li>
            <li>{data.feature1}</li>
            <li>{data.feature1}</li>
          </ul>
        </div>
        <div className={classes.lowerContainerRight}>
          <div className={classes.carousel}>
            <Carousel images={propertyData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className={classes.header}>
        <h1>SAMPLES OF PROJECTS</h1>
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {projectsDatav2.map((element) => (
            <li key={element.id}>
              <ProjectItem data={element} />
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
