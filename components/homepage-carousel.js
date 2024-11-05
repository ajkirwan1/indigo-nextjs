/** @format */
"use client";

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classes from "./homepage-carousel.module.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import page from "@/app/(contents)/properties/page";
import { Smooch } from "next/font/google";

export default function HomepageCarousel({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1
        ? components.length - 1
        : prevIndex + 1
    );
    let pageHeight = window.innerHeight;
    console.log(currentIndex);
    if (currentIndex < components.length) {
      window.scrollTo({
        top: (currentIndex + 1) * pageHeight,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    let pageHeight = window.innerHeight;
    if (currentIndex > 0) {
      window.scrollTo({
        top: (currentIndex - 1) * pageHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        {components.map((component, index) => (
          <div className={classes.container2} key={index}>
            {component}
            <div className={classes.buttonWrapper}>
              {/* <button
                onClick={handlePrevious}
                className={`${classes.imageSliderBtn} ${classes.top}`}
              >
                <ArrowBigLeft />
              </button>
              <button
                onClick={handleNext}
                className={`${classes.imageSliderBtn} ${classes.bottom}`}
              >
                <ArrowBigRight />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
