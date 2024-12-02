"use client";

/** @format */
import Skeleton from "@mui/material/Skeleton";
import { Avatar } from "@nextui-org/react";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Image from "next/image";

import classes from "./news-item-fallback.module.css";

export default function NewsItemFallback() {
  return (
    <div>
      <Skeleton variant="rectangular" width="100%">
        <Image width={750} height={500} className={classes.image} />
      </Skeleton>
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
              // size="md"
              isBordered
            />
          </Skeleton>
          <Skeleton>
            <p>By an author</p>
          </Skeleton>
        </div>
        <div className={classes.hiddenContainer}></div>
      </div>
    </div>
  );
}
