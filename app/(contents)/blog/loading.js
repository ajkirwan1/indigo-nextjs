import NewsItemFallback from "@/components/fallbacks/news/news-item-fallback";
import classes from "./page.module.css";

export default function LoadingNews() {
  return (
    <>
      <div className={classes.header}>
        <h1>NEWS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainerSkeleton}>
        <ul>
          <li key={1}>
            <NewsItemFallback />
          </li>
          <li key={2}>
            <NewsItemFallback />
          </li>
          <li key={3}>
            <NewsItemFallback />
          </li>
          <li key={4}>
            <NewsItemFallback />
          </li>
          {/* <li key={5}>
            <NewsItemFallback />
          </li>
          <li key={6}>
            <NewsItemFallback />
          </li> */}
        </ul>
      </div>
    </>
  );
}
