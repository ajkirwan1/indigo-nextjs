import NewsItemFallback from "@/components/fallbacks/news/news-item-fallback";
import classes from "./page.module.css";

export default function LoadingProjects() {
  return (
    <>
      <title>INDIGO Consulting Blog Page</title>
      <div className={classes.subHeader}>
        <h1>Blogs</h1>
      </div>
      <div className={classes.blogPageContainerLoading}>
        <ul>
          <li key={1}>
            <NewsItemFallback />
          </li>
          <li key={2}>
            <NewsItemFallback />
          </li>
          {/* <li key={3}>
            <NewsItemFallback />
          </li> */}
        </ul>
      </div>
    </>
  );
}
