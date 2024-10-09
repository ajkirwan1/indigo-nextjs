/** @format */

import { getProject } from "@/server/data/projects";
// import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage({ params }) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Image
        src={project.slug}
        alt="alt"
        width={1920}
        height={960}
        style={{
          width: "80%",
          height: "auto",
        }}
        sizes="100vw"
      />
    </>
  );
}
