import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";
import classes from "./page.module.css";

export default function LoadingProjects() {
  return (
    <>
      <title>INDIGO Consulting Projects Loading Page</title>
      <div className={classes.subHeader}>
        <h1>Completed projects</h1>
      </div>
      <div className={classes.blogPageContainer}>
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
