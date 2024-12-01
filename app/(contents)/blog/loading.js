import NewsItemFallback from "@/components/fallbacks/news/news-item-fallback";
import classes from "./page.module.css";

export default function LoadingNews() {
  return (
    <>
      <title>INDIGO Consulting Blog Loading Page</title>
      <div className={classes.subHeader}>
        <h1>Blogs</h1>
      </div>
      <div className={classes.blogPageContainer}>
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
