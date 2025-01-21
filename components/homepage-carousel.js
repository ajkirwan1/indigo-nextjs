/** @format */
"use client";
import classes from "./homepage-carousel.module.css";

export default function HomepageCarousel({ components }) {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        {components.map((component, index) => (
          <div className={classes.container2} key={index}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}
