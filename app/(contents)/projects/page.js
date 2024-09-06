/** @format */

import ProjectsGrid from "@/components/pages/projects/projects-grid";
import { getProjects } from "@/server/data/projects";
import Link from "next/link";

async function Projects() {
  const projects = await getProjects();
  return <ProjectsGrid projects={projects} />;
}

export default function ProjectsPage() {
  return (
    <>
      <h1>
        <Projects />
        <Link href="/login">LOGIN</Link>
      </h1>
    </>
  );
}
