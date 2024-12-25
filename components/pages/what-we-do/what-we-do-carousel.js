/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";

import classes from "./what-we-do-carousel.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function WhatWeDoCarousel({ images }) {
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
    // <div className={classes.container}>
      <div className={classes.innerContainer}>
        {images.map((img) => (
          <div key={img.id} className={classes.imageContainer}>
             <div key={img.id} className={classes.imageContainerInner}>
             <Image
              className={classes.carouselImage}
              style={{ translate: `${-100 * currentIndex}%` }}
              width={750}
              height={500}
              src={img.image}
              alt="alt"
              priority={true}
            />
             </div>
            
          </div>
        ))}
      {/* </div> */}
      {/* <button
        onClick={handlePrevious}
        className={`${classes.imageSliderBtn} ${classes.left}`}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={handleNext}
        className={`${classes.imageSliderBtn} ${classes.right}`}
      >
        <ArrowBigRight />
      </button> */}
    </div>
  );
}
