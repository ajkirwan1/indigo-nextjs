/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";
import WhiteArrow from "/public/images/icons/arrowwhite.png";
import classes from "./project-carousel.module.css";

export default function ProjectCarousel({ images, children, backup }) {
  // console.log(backup);
  // console.log(images);
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
              className={backup? classes.carouselImage : `${classes.carouselImage} ${classes.carouselImageSmall}`}
              style={{ translate: `${-100 * currentIndex}%` }}
              width={1920}
              height={960}
              src={backup ? img : `https:${img}`}
              alt="alt"
              priority={true}
              // placeholder="blur"
              // blurDataURL="/public/picture-2.jpg"
            />
          ))}
        </div>
        {!backup ? (
          <>
            {" "}
            <button
              onClick={handlePrevious}
              className={`${classes.imageSliderBtn} ${classes.left}`}
            >
              <Image
                height={100}
                width={100}
                alt="An image of an arrow pointing to the left"
                src={WhiteArrow}
              />
            </button>
            <button
              onClick={handleNext}
              className={`${classes.imageSliderBtn} ${classes.right}`}
            >
              <Image
                height={100}
                width={100}
                alt="An image of an arrow pointing to the right"
                src={WhiteArrow}
              />
            </button>
          </>
        ) : null}
      </div>
      <div>{children}</div>
    </>
  );
}
