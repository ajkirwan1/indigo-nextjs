/** @format */

import ProjectItem from "./project-item";
export default function ProjectsGrid({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  );
}
