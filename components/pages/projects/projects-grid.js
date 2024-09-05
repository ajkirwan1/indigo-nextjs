/** @format */

import ProjectItem from "./project-item";
import classes from "./projects-grid.module.css";

export default function ProjectsGrid({ projects }) {
  return (
    <ul className={classes.projectGrid}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  );
}
