/** @format */
"use client";
import Header from "@/components/ui/header/header";
import classes from "./hero-component.module.css";
import Image from "next/image";

export default function HeroComponent({
  heroImage,
  altText,
  header,
  children,
}) {
  return (
    <>
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            priority
            // mobile
            alt={altText}
            src={heroImage}
            className={classes.imageHero}
          />
        </div>
        <div className={classes.formContainerOuterWrapper}>
          {header ? <Header className={classes.heroHeader} /> : null}
          {children}
        </div>
      </div>
    </>
  );
}
