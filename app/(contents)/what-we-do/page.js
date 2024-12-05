/** @format */
"use client";

import classes from "./page.module.css";
import WebItemComponent from "@/components/web-item-component";
import WebItemComponentSmall from "@/components/web-item-component-small";
import { whatWeDoData } from "@/data/what-we-do-data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ServiceItem({ data }) {
  return (
    // <Link href={`projects/${data.id}`}>
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={data.image}
            alt="alt"
            width={750}
            height={500}
          />
        </div>

        <div className={classes.infoWrapper}>
          <h2>{data.title}</h2>
          <p>{data.info.paragraph}</p>
          <p className={classes.link}>
            <Link href="">More</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default function ServicePage() {
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
        <h1>SERVICES</h1>
      </div>
      <section className={classes.page}>
        {whatWeDoData.map((element) => (
          <div key={element.id}>
            <ServiceItem data={element} />
          </div>
        ))}
      </section>
    </>
  );
}
