/** @format */
"use client";
import Header from "@/components/ui/header/header";
import classes from "./hero.module.css";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { propertyData } from "@/public/data/data";

export default function HeroProjects({
  heroImage,
  altText,
  header,
  footer,
  children,
}) {
  return (
    <>
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          {/* <Image
            priority
            // mobile
            height={1350}
            width={2400}
            alt={altText}
            src={heroImage}
            className={classes.imageHero}
          /> */}
          <Carousel images={propertyData} />
        </div>
        <div className={classes.formContainerOuterWrapper}>{children}</div>
      </div>
    </>
  );
}
