/** @format */
"use client";

import classes from "./page.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import emmanImage from "/public/images/pages/who-we-are/eman.jpg";

function LargeSection() {
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.paragraphWrapper}>
        <h2>INDIGO</h2>
        <p>
          Established in 2021 by Emmanuel Petrakis. Stands as a bespoke real
          estate consulting firm capitalizing on strategic investment
          opportunities. Boasting 25 years of experience and local knowledge.
        </p>
        <p>
          Indigo serves as a trusted service company to investors, providing
          expertise consulting in residential development. The company’s
          multi-disciplinary team, comprised of investment, finance and realty
          professionals, collaborates with reputable firms such as developers,
          architects, lawyers, notaries and more.
        </p>
        <p>
          The clientele includes private investors and investment funds, both
          local and foreign, seeking tailored solutions for various real estate
          ventures. Indigo emphasizes in transparency, low-risk strategies, and
          a commitment to guide clients through every step of their investment
          projects in Greece.
        </p>
      </div>
      <span></span>
      <div className={classes.top}>
        <div className={classes.imageOuterWrapper}>
          <div className={classes.paragraphWrapperRight}>
            <h2>EMMANUEL PETRAKIS</h2>
            <h3>Director and founder</h3>
            <p>
              With more than 25 years of extensive local expertise spanning
              diverse business sectors I have cultivated a deep understanding of
              the investment landscape.
            </p>
            <p>
              Over the last 18 years my focus has extended to encompass real
              estate. Having served as CEO within this quarter-century timeframe
              I bring a wealth of knowledge and experience to the table.
            </p>
          </div>
          <Image
            className={classes.image}
            src={emmanImage}
            alt="An image showing Emmanuel Petrakis, wearing a hard-hat and high vis vest, while working on a building site"
            width={2048}
            height={1400}
          />
        </div>

        {/* <p>
          Over the last 18 years my focus has extended to encompass real estate.
          Having served as CEO within this quarter-century timeframe I bring a
          wealth of knowledge and experience to the table.
        </p> */}
      </div>
    </div>
  );
}

function SmallSection() {
  return (
    <div className={classes.flexCol}>
      <div className={classes.sectionContainerSmall}>
        <div className={classes.paragraphWrapperSmall}>
          <p>
            Established in 2021 by Emmanuel Petrakis. Stands as a bespoke real
            estate consulting firm capitalizing on strategic investment
            opportunities. Boasting 25 years of experience and local knowledge.
          </p>
          <p>
            Indigo serves as a trusted service company to investors, providing
            expertise consulting in residential development. The company’s
            multi-disciplinary team, comprised of investment, finance and realty
            professionals, collaborates with reputable firms such as developers,
            architects, lawyers, notaries and more.
          </p>
        </div>
        <Image
          className={classes.imageSmall}
          src={emmanImage}
          alt="An image showing Emmanuel Petrakis, wearing a hard-hat and high vis vest, while working on a building site"
          width={2048}
          height={1400}
        />
      </div>
      <p>
        The clientele includes private investors and investment funds, both
        local and foreign, seeking tailored solutions for various real estate
        ventures. Indigo emphasizes in transparency, low-risk strategies, and a
        commitment to guide clients through every step of their investment
        projects in Greece.
      </p>
    </div>
  );
}

export default function WhoWeArePage() {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setViewport("large");
    } else if (window.innerWidth < 1200) {
      setViewport("small");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setViewport("large");
      } else if (window.innerWidth < 1200) {
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
      <title>INDIGO CONSULTING WHO WE ARE</title>
      <div className={classes.pageWrapper}>
        <div className={classes.header}>
          <h1>WHO WE ARE</h1>
        </div>

        {viewport == "large" ? <LargeSection /> : <SmallSection />}
        {/* <div className={classes.paragraphWrapperRight}>
          <h2>EMMANUEL PETRAKIS</h2>
          <h3>Director and founder</h3>
          <p>
            With more than 25 years of extensive local expertise spanning
            diverse business sectors I have cultivated a deep understanding of
            the investment landscape. Over the last 18 years my focus has
            extended to encompass real estate. Having served as CEO within this
            quarter-century timeframe I bring a wealth of knowledge and
            experience to the table.
          </p>
        </div> */}
      </div>
    </>
  );
}
