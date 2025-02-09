/** @format */

"use client";

/** @format */
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import dummyImage from "/public/images/pages/projects/thumbjordan.png"
import classes from "./project-item.fallback.module.css";

export default function ProjectItemFallback() {
  return (
      <div className={classes.ProjectItemWrapper}>
        <div className={classes.imageContainer}>
          <Skeleton className={classes.imageSkeleton} variant="rectangular">
            <Image
              className={classes.imageDummy}
              src={dummyImage}
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
          <Skeleton
            style={{ marginTop: "20px" }}
            variant="rectangular"
            height={40}
            width={80}
          >
            <h2>TITLE</h2>
          </Skeleton>
          <Skeleton
            style={{ marginTop: "20px" }}
            variant="rectangular"
            height={40}
            width={60}
          >
            <h2>TITLE</h2>
          </Skeleton>
        </div>
      </div>
  );
}
