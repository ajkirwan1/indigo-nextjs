/** @format */

import { getProject } from "@/server/data/projects";
// import classes from "./page.module.css";
// import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage({ params }) {
  console.log(params.id);
  // console.log(params.slug);
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return <>{<h1>{params.id}</h1>}</>;
}
