/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";

import classes from "./carousel.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log(images);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    console.log(images);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        {images.map((img) => (
          <Image
            key={img.id}
            className={classes.carouselImage}
            style={{ translate: `${-100 * currentIndex}%` }}
            width={1920}
            height={960}
            src={img.image}
            alt="alt"
            priority={true}
          />
        ))}
      </div>
      <button
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
      </button>
    </div>
  );
}
