/** @format */

import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/server/actions/contentful/get-all-projects";


export const metadata = {
  title: "Case Studies",
  keywords: [
    "Greece",
    "Development",
    "Consulting",
    "Luxury",
    "Redevelopment",
    "Golden visa",
    "Market Analysis",
    "Real Estate",
    "Case Studies",
    "Consulting Services",
  ],
  description:
    "Explore a curated selection of case studies by Indigo Consulting, highlighting successful real estate projects in Greece, including luxury developments, redevelopment, and market analysis. See how our expertise has made a difference for our clients.",
};


function ProjectItem({ data }) {
  const {
    title,
    thumbnailImage,
    investmentReturn,
    description,
    slug,
    features,
  } = data.fields;


  return (
    <Link href={`case-studies/${slug}`}>
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
          <ul>
            {features?.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default async function ProjectsPage() {
  const result = await getAllProjects();

  if (result.error) {
    throw new Error(result.error.message);
  }

  return (
    <>
      <div className="header">
        <h1>CASE STUDIES</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainer}>
        <h3 className={classes.header}>
          Below are selected examples of real estate transformations and
          other advisory services we have provided internationally
        </h3>
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
