import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";
import classes from "./page.module.css";

export default function LoadingProjects() {
  return (
    <>
      <title>INDIGO Consulting Projects Loading Page</title>
      <div className={classes.header}>
        <h1>OUR PROJECTS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainerSkeleton}>
        <ul>
          <li key={1}>
            <ProjectItemFallback />
          </li>
          <li key={2}>
            <ProjectItemFallback />
          </li>
          <li key={3}>
            <ProjectItemFallback />
          </li>
        </ul>
      </div>
    </>
  );
}
