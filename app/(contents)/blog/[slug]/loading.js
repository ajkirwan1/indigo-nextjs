/** @format */
"use client";
import classes from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import shareIcon from "/public/images/icons/shareIcon.svg";
import imageIcon from "/public/images/icons/icons8-plus.svg";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingBlogPage(props) {
  return (
    <>
      <title>Loding screen for a blog post</title>
      <div className="header">
        <h1>NEWS</h1>
        <hr />
      </div>
      <div className={classes.blogPost}>
        <div className={classes.column1}>
          <section className={classes.openingSection}>
            <Skeleton variant="rectangular" width="60%" height={50}>
              <h1>TITLE</h1>
            </Skeleton>

            <div
              className={`${classes.imageContainer} ${classes.imageContainerSkeleton}`}
            >
              <Skeleton variant="rectangular" width="100%" height="100%">
                <Image
                  // key={data.image}
                  alt="A placeholder image for the blog item loading screen"
                  className={classes.image}
                  width={750}
                  height={500}
                />
              </Skeleton>
            </div>
            <div className={classes.subHeaderSkeleton}>
              <Skeleton variant="rectangular" width="60%" height={50}>
                <p>DATE</p>
              </Skeleton>
              <Skeleton variant="rectangular" width="60%" height={50}>
                <p>DATE</p>
              </Skeleton>
              <div
                className={`${classes.avatarAuthor} ${classes.avatarAuthorSkeleton}`}
              >
                <Skeleton variant="circular">
                  <Avatar
                    src="/images/pages/who-we-are/emanfinal.jpg"
                    color="default"
                    size="md"
                    isBordered
                  />
                </Skeleton>
                <div>
                  <Skeleton variant="rectangular" width="50%" height={30}>
                    <p>By author</p>
                  </Skeleton>
                </div>
              </div>
              <div className={classes.shareIconContainer}>
                <Skeleton>
                  <Image src={shareIcon} alt="alt" width={30} height={30} />
                </Skeleton>
              </div>
            </div>
          </section>
          <section className={classes.secondSection}>
            <Skeleton variant="rectangular" width="60%">
              <h2>Subtitle</h2>
            </Skeleton>
            <Skeleton variant="text" width="80%" height={40}>
              <p>Subtitle</p>
            </Skeleton>
            <Skeleton variant="text" width="80%" height={40}>
              <p>Subtitle</p>
            </Skeleton>
            <Skeleton variant="text" width="80%" height={40}>
              <p>Subtitle</p>
            </Skeleton>
            <Skeleton variant="text" width="80%" height={40}>
              <p>Subtitle</p>
            </Skeleton>
            <Skeleton variant="text" width="80%" height={40}>
              <p>Subtitle</p>
            </Skeleton>
            <Skeleton variant="text" width="80%" height={40}>
              <p>Subtitle</p>
            </Skeleton>
          </section>
        </div>
      </div>
    </>
  );
}
