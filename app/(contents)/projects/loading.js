/** @format */
"use client";
import ProjectItemFallback from "@/components/fallbacks/projects/project-item-fallback";
import classes from "./page.module.css";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

export default function LoadingProjects() {
  return (
    <>
      <title>INDIGO Consulting Projects Loading Page</title>
      <div className="header">
        <h1>SAMPLES OF PROJECTS</h1>
        <hr />
      </div>
      <div className={classes.blogPageContainerSkeleton}>
        <ul>
          <li key={1}>
            <div className={classes.ProjectItemWrapper}>
              <div className={classes.imageContainer}>
                <Skeleton className={classes.imageSkeleton} variant="rectangular" width="100%">
                  <Image
                    className={classes.image}
                    alt="A placeolder image for a skeleton loading page"
                    width={800}
                    height={600}
                  />
                </Skeleton>
              </div>
              <div className={classes.infoWrapper}>
                <Skeleton variant="rectangular" width={300} height={50}>
                  <h2>TITLE</h2>
                </Skeleton>
                <Skeleton style={{marginTop: "20px"}} variant="rectangular" height={40} width={80}>
                  <h2>TITLE</h2>
                </Skeleton >
                <Skeleton style={{marginTop: "20px"}} variant="rectangular" height={40} width={60}>
                  <h2>TITLE</h2>
                </Skeleton>
              </div>
            </div>
          </li>
          <li key={2}>
            <div className={classes.ProjectItemWrapper}>
              <div className={classes.imageContainer}>
                <Skeleton className={classes.imageSkeleton} variant="rectangular" width="100%">
                  <Image
                    className={classes.image}
                    alt="A placeolder image for a skeleton loading page"
                    width={800}
                    height={600}
                  />
                </Skeleton>
              </div>
              <div className={classes.infoWrapper}>
                <Skeleton variant="rectangular" width={300} height={50}>
                  <h2>TITLE</h2>
                </Skeleton>
                <Skeleton style={{marginTop: "20px"}} variant="rectangular" height={40} width={80}>
                  <h2>TITLE</h2>
                </Skeleton >
                <Skeleton style={{marginTop: "20px"}} variant="rectangular" height={40} width={60}>
                  <h2>TITLE</h2>
                </Skeleton>
              </div>
            </div>
          </li>
          <li key={3}>
            <div className={classes.ProjectItemWrapper}>
              <div className={classes.imageContainer}>
                <Skeleton className={classes.imageSkeleton} variant="rectangular" width="100%">
                  <Image
                    className={classes.image}
                    alt="A placeolder image for a skeleton loading page"
                    width={800}
                    height={600}
                  />
                </Skeleton>
              </div>
              <div className={classes.infoWrapper}>
                <Skeleton variant="rectangular" width={300} height={50}>
                  <h2>TITLE</h2>
                </Skeleton>
                <Skeleton style={{marginTop: "20px"}} variant="rectangular" height={40} width={80}>
                  <h2>TITLE</h2>
                </Skeleton >
                <Skeleton style={{marginTop: "20px"}} variant="rectangular" height={40} width={60}>
                  <h2>TITLE</h2>
                </Skeleton>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
