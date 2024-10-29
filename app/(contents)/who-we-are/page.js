/** @format */
"use client";

import classes from "./page.module.css";
import { useState, useEffect } from "react";
import WebItemComponent from "@/components/web-item-component";
import WebItemComponentSmall from "@/components/web-item-component-small";
import { whoWeAreData } from "@/data/who-we-are-data";

export default function WhoWeArePage() {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setViewport("large");
    } else if (window.innerWidth < 1400) {
      setViewport("small");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setViewport("large");
      } else if (window.innerWidth < 1400) {
        setViewport("small");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div className={classes.subHeader}>
        <h1>WHO WE ARE</h1>
      </div>
      <section className={classes.section1}>
        {viewport == "large" ? (
          <WebItemComponent
            paragraph1={whoWeAreData[0]["info"]["paragraph"]}
            paragraph2={whoWeAreData[0]["info"]["paragraph2"]}
            paragraph3={whoWeAreData[0]["info"]["paragraph3"]}
            image={whoWeAreData[0]["image"]}
          />
        ) : (
          <WebItemComponentSmall
            paragraph1={whoWeAreData[0]["info"]["paragraph"]}
            paragraph2={whoWeAreData[0]["info"]["paragraph2"]}
            paragraph3={whoWeAreData[0]["info"]["paragraph3"]}
            image={whoWeAreData[0]["image"]}
          />
        )}
        <WebItemComponent
          className="reverse"
          imageClassName="smallImage"
          title={whoWeAreData[1]["title"]}
          subtitle={whoWeAreData[1]["subtitle"]}
          paragraph1={whoWeAreData[1]["info"]["paragraph"]}
          paragraph2={whoWeAreData[1]["info"]["paragraph2"]}
          paragraph3={whoWeAreData[1]["info"]["paragraph3"]}
          paragraph4={whoWeAreData[1]["info"]["paragraph4"]}
          image={whoWeAreData[1]["image"]}
        />
      </section>
    </>
  );
}
