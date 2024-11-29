"use client";

/** @format */
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import Typography, { TypographyProps } from "@mui/material/Typography";

import classes from "./project-item.fallback.module.css";

export default function ProjectItemFallback() {
  return (
    <div className={classes.imageContainer}>
      <div>
        <Skeleton
          variant="rectangular"
          width={500}
          height={375}
          className={classes.image}
        />
        <Skeleton>
          <h2>TITLE</h2>
        </Skeleton>
        <Skeleton>
          <p>LOCATION</p>
        </Skeleton>
        <Skeleton>
          <p>INVESTMENT RETURN</p>
        </Skeleton>
        <Skeleton>
          <p>INVESTMENT RETURN</p>
        </Skeleton>
      </div>
    </div>
  );
}
