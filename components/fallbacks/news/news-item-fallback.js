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
import { createClient } from "contentful";

import classes from "./news-item-fallback.module.css";

export default function NewsItemFallback() {
  return (
    <>
      <div>
        <Image
          key={1}
          className={classes.image}
          //   src={`https:${primaryImage.fields.file.url}`}
          alt="alt"
          width={750}
          height={500}
        />
        <h2>TEXT</h2>
        <p>TEXT</p>
        <p>TEXT</p>
        <div className={classes.avatarAuthorContainer}>
          <div className={classes.avatarAuthor}>
            {/* <Avatar
              src="/images/pages/who-we-are/emanfinal.jpg"
              color="default"
              size="md"
              isBordered
            /> */}
            <Skeleton variant="circular" width={40} height={40}></Skeleton>
            <Skeleton className={classes.skeletonAuthor}></Skeleton>
          </div>
          <div className={classes.hiddenContainer}>
            <Link href="/">Read more</Link>
          </div>
        </div>
      </div>
    </>
  );
}
