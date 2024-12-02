/** @format */
"use client";

import classes from "./page.module.css";
import WebItemComponent from "@/components/web-item-component";
import WebItemComponentSmall from "@/components/web-item-component-small";
import { whatWeDoData } from "@/data/what-we-do-data";
import { useEffect, useState } from "react";

export default function WhatWeDoPage() {
  const [viewport, setViewport] = useState();

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setViewport("large");
    } else if (window.innerWidth < 1000) {
      setViewport("small");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setViewport("large");
      } else if (window.innerWidth < 1000) {
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
      <title>INDIGO CONSULTING WHAT WE DO</title>
      <div className={classes.header}>
        <h1>WHAT WE DO</h1>
        <hr />
      </div>
      {viewport == "large" ? (
        <WebItemComponent
          title={whatWeDoData[0]["title"]}
          paragraph1={whatWeDoData[0]["info"]["paragraph"]}
          paragraph2={whatWeDoData[0]["info"]["paragraph2"]}
          image={whatWeDoData[0]["image"]}
        />
      ) : (
        <WebItemComponentSmall
          title={whatWeDoData[0]["title"]}
          paragraph1={whatWeDoData[0]["info"]["paragraph"]}
          paragraph3={whatWeDoData[0]["info"]["paragraph2"]}
          image={whatWeDoData[0]["image"]}
        />
      )}
      <WebItemComponent
        title={whatWeDoData[1]["title"]}
        paragraph1={whatWeDoData[1]["info"]["paragraph"]}
        image={whatWeDoData[1]["image"]}
      />
      {viewport == "large" ? (
        <WebItemComponent
          title={whatWeDoData[2]["title"]}
          paragraph1={whatWeDoData[2]["info"]["paragraph"]}
          paragraph2={whatWeDoData[2]["info"]["paragraph2"]}
          image={whatWeDoData[2]["image"]}
        />
      ) : (
        <WebItemComponentSmall
          title={whatWeDoData[2]["title"]}
          paragraph1={whatWeDoData[2]["info"]["paragraph"]}
          paragraph3={whatWeDoData[2]["info"]["paragraph2"]}
          image={whatWeDoData[2]["image"]}
        />
      )}
      <WebItemComponent
        buttonPosition="left"
        title={whatWeDoData[3]["title"]}
        paragraph1={whatWeDoData[3]["info"]["paragraph"]}
        paragraph2={whatWeDoData[3]["info"]["paragraph2"]}
        image={whatWeDoData[3]["image"]}
        buttonText={whatWeDoData[3]["button"]["text"]}
        buttonPath={whatWeDoData[3]["button"]["href"]}
      />
      <WebItemComponent
        buttonPosition="left"
        title={whatWeDoData[4]["title"]}
        paragraph1={whatWeDoData[4]["info"]["paragraph"]}
        paragraph2={whatWeDoData[4]["info"]["paragraph2"]}
        image={whatWeDoData[4]["image"]}
        buttonText={whatWeDoData[4]["button"]["text"]}
        buttonPath={whatWeDoData[4]["button"]["href"]}
      />
      <WebItemComponent
        buttonPosition="left"
        title={whatWeDoData[5]["title"]}
        paragraph1={whatWeDoData[5]["info"]["paragraph"]}
        image={whatWeDoData[5]["image"]}
        buttonText={whatWeDoData[5]["button"]["text"]}
        buttonPath={whatWeDoData[5]["button"]["href"]}
      />
      <WebItemComponent
        title={whatWeDoData[6]["title"]}
        paragraph1={whatWeDoData[6]["info"]["paragraph"]}
        image={whatWeDoData[6]["image"]}
      />
      <WebItemComponent
        title={whatWeDoData[7]["title"]}
        paragraph1={whatWeDoData[7]["info"]["paragraph"]}
        image={whatWeDoData[7]["image"]}
      />
    </>
  );
}
