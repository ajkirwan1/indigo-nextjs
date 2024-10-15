/** @format */

import Image from "next/image";
import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";

function ImageList(images) {
  const imageArray = images.images;
  return (
    <>
      <div className={classes.imageContainer}>
        {imageArray.map((element) => (
          <Image
            key={element.url}
            className={classes.image}
            src={element.url}
            alt="alt"
            width={750}
            height={500}
          />
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
