"use client";

/** @format */
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import Typography, { TypographyProps } from "@mui/material/Typography";

import classes from "./project-item.fallback.module.css";

export default function ProjectItemFallback() {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        width="100%"
        // width={500}
        // height={375}
      >
        <Image width={750} height={500} className={classes.image} />
      </Skeleton>
      <Skeleton>
        <h1>TITLE----</h1>
      </Skeleton>
      <Skeleton>
        <p>LOCATION----------------</p>
      </Skeleton>
      <Skeleton>
        <p>INVESTMENT RETURN----------</p>
      </Skeleton>
      <Skeleton>
        <p>--------------------------</p>
      </Skeleton>
      <Skeleton>
        <p>--------------------------</p>
      </Skeleton>
      <Skeleton>
        <p>--------------------------</p>
      </Skeleton>
    </div>
  );
}
