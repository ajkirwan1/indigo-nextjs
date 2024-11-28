/** @format */

import { projectsData } from "@/data/projects-data";
import classes from "./page.module.css";
import Image from "next/image";

function ProjectItem({ data }) {
  // const imageArray = images.images;
  return (
      <div className={classes.imageContainer}>
        <div>
        <h2>{data.title}</h2>
          <p>Location - {data.location}</p>
          <p>Investment return - {data.investmentReturn}</p>
          <Image
            // key={blogData.image}
            className={classes.image}
            src={data.image}
            alt="alt"
            width={750}
            height={500}
          />
          <p>{data.opening}</p>
          {/* <div className={classes.avatarAuthorContainer}>
            <div className={classes.avatarAuthor}>
              <p>By {author}</p>
            </div>
            <div className={classes.hiddenContainer}>
              <Link href={`blog/${slug}`}>Read more</Link>
            </div>
          </div> */}
        </div>
      </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
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
