/** @format */

import ProjectsGrid from "@/components/pages/projects/projects-grid";
import { getProjects } from "@/server/data/projects";
import Link from "next/link";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

// async function AdminPage() {
//   const projects = await getProjects();
//   return <ProjectsGrid projects={projects} />;
// }

export default async function AdminPage() {
    const {user} = await validateRequest();
    console.log(user.adminUser, "Admin access");
    if (user?.adminUser != 1 )
    {
      redirect("/");
    }

  return (
    <>
      <h1>Admin</h1>
    </>
  );
}
