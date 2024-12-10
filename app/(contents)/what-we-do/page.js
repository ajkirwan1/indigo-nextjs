/** @format */
"use client";

import classes from "./page.module.css";
import { whatWeDoData } from "@/data/what-we-do-data";
import { useEffect, useState } from "react";
import Image from "next/image";

function ServiceItem({ data, handleModal, infoActive, modalIndex }) {
  return (
    <div
      key={data.id}
      className={
        !(infoActive && data.id == modalIndex)
          ? `${classes.itemContainer}`
          : null
      }
    >
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={data.image}
          alt="alt"
          width={1000}
          height={1250}
        />
        <div className={classes.moreContainer}>
          {infoActive && data.id == modalIndex ? null : <h2>{data.title}</h2>}
        </div>
        <div
          className={
            infoActive && data.id == modalIndex
              ? `${classes.infoWrapper} ${classes.infoWrapperActive}`
              : `${classes.infoWrapper} `
          }
        >
          {!(infoActive && data.id == modalIndex) ? (
            <div className={classes.popupContainerClosed}>
              <p onClick={() => handleModal(data.id)}>More</p>
            </div>
          ) : (
            <div className={classes.popupContainerOpen}>
              <div>
                <h2>{whatWeDoData[modalIndex].title}</h2>
                <p>{whatWeDoData[modalIndex].info.paragraph}</p>
                <p>{whatWeDoData[modalIndex].info.paragraph2}</p>
                <p>{whatWeDoData[modalIndex].info.paragraph3}</p>
              </div>
              <div className={classes.lessContainer}>
                <p onClick={() => handleModal(data.id)}>Less</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicePage() {
  const [viewport, setViewport] = useState();
  const [modalIndex, setModalIndex] = useState(null);
  const [infoActive, setInfoActive] = useState(false);

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

  const handleModal = (id) => {
    setInfoActive((val) => !val);
    setModalIndex(id);
  };

  return (
    <>
      <title>INDIGO CONSULTING WHAT WE DO</title>
      <div className={classes.header}>
        <h1>SERVICES</h1>
      </div>
      {/* <section>
        <Image
          src={"/images/pages/what-we-do/16:9/hands.jpg"}
          alt="asdsa"
          height={500}
          width={1000}
        />
      </section> */}
      <section className={classes.page}>
        {whatWeDoData.map((element) => (
          <ServiceItem
            data={element}
            handleModal={handleModal}
            modalIndex={modalIndex}
            infoActive={infoActive}
          />
        ))}
      </section>
    </>
  );
}
