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
      <div className={classes.header}>
        <h1>NEWS</h1>
        <hr />
      </div>
      <div className={classes.blogPost}>
        <div className={classes.column1}>
          <section className={classes.openingSection}>
            <div className={classes.imageContainer}>
              <Skeleton variant="rectangular" width="100%" height="100%">
                <Image
                  // key={data.image}
                  className={classes.image}
                  width={750}
                  height={500}
                />
              </Skeleton>
            </div>
            <div className={classes.subHeaderSkeleton}>
              <Skeleton variant="rectangular" width="80%" height={70}>
                <p>DATE</p>
              </Skeleton>
              <Skeleton variant="rectangular" width="80%" height={70}>
                <p>DATE</p>
              </Skeleton>
              <Skeleton variant="rectangular" width="30%" height={40}>
                <p>DATE</p>
              </Skeleton>
              <div className={classes.avatarAuthor}>
                <Skeleton variant="circular">
                  <Avatar
                    src="/images/pages/who-we-are/emanfinal.jpg"
                    color="default"
                    size="md"
                    isBordered
                  />
                </Skeleton>
                <div>
                  <Skeleton variant="rectangular" width="60%" height={40}>
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
        <div className={classes.column2}>
          <section className={classes.newsLetterSection}>
            <h2>NEWSLETTER</h2>
            <form>
              <div className={classes.formContainer}>
                {/* <p>
                Stay up to date with the latest news and developments from
                Indigo Consulting
              </p> */}
                <Image src={imageIcon} alt="alt" width={40} height={40} />
                <input
                  type="email"
                  name="username"
                  placeholder="Email Address"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
