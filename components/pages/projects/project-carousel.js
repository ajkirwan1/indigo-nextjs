/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";
import WhiteArrow from "/public/images/icons/arrowwhite.png";

import classes from "./project-carousel.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ProjectCarousel({ images, children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          {images.map((img) => (
            <Image
              key={img}
              className={classes.carouselImage}
              style={{ translate: `${-100 * currentIndex}%` }}
              width={1920}
              height={960}
              src={`https:${img}`}
              alt="alt"
              priority={true}
            />
          ))}
        </div>
        <button
          onClick={handlePrevious}
          className={`${classes.imageSliderBtn} ${classes.left}`}
        >
          {" "}
          <Image height={100} width={100} src={WhiteArrow} />
          {/* <ArrowBigLeft /> */}
        </button>
        <button
          onClick={handleNext}
          className={`${classes.imageSliderBtn} ${classes.right}`}
        >
          <Image height={100} width={100} src={WhiteArrow} />
          {/* <ArrowBigRight /> */}
        </button>
      </div>
      <div>{children}</div>
    </>
  );
}
