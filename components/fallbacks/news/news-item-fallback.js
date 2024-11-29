"use client";

/** @format */

// import { Suspense } from "react";
// import TableHeadItem from "./table-head-item";
// import TableRow from "./table-row";
// import { Skeleton } from "@nextui-org/skeleton";
// import { commonColors, semanticColors } from "@nextui-org/theme";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
// import classes from "./page.module.css";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import Typography, { TypographyProps } from "@mui/material/Typography";

import classes from "./news-item-fallback.module.css";

export default function NewsItemFallback() {
  return (
    <>
      <div className={classes.imageContainer}>
        <div>
          <Skeleton
            variant="rectangular"
            width={500}
            height={375}
            className={classes.image}
          />
          <Typography variant="h1">
            <Skeleton></Skeleton>
          </Typography>
          <Skeleton
            variant="text"
            className={classes.skeletonParagraph}
            // width={40}
            height={40}
          ></Skeleton>
          <Skeleton
            variant="text"
            className={classes.skeletonParagraph}
            // width={40}
            height={40}
          ></Skeleton>

          <div className={classes.avatarAuthorContainer}>
            <div className={classes.avatarAuthor}>
              <Skeleton variant="circular">
                <Avatar
                  src="/images/pages/who-we-are/emanfinal.jpg"
                  color="default"
                  size="md"
                  isBordered
                />
              </Skeleton>
              <Skeleton>
                <p>By an author</p>
              </Skeleton>
              {/* <Skeleton className={classes.skeletonAuthor}></Skeleton> */}
            </div>
            <div className={classes.hiddenContainer}>
              {/* <Link href="/">Read more</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
