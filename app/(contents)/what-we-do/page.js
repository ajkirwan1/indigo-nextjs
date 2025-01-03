/** @format */
"use client";

import classes from "./page.module.css";
import { whatWeDoData } from "@/data/what-we-do-data";
import { useState } from "react";
import Image from "next/image";
import WhatWeDoMobileSwiper from "@/components/pages/what-we-do/what-we-do-swiper-mobile";


// export const metadata = {
//   title: "Services",
//   keywords: [
//     "Greece",
//     "Development",
//     "Consulting",
//     "Luxury",
//     "Redevelopment",
//     "Golden visa",
//     "Market Analysis",
//     "Email",
//     "Conact",
//     "Phone number",
//   ],
//   description:
//     "Indigo consulting web application services page. Vistors can read about the services provided by Indigo Consulting",
// };


function ServiceItem({ data, handleModal, infoActive, modalIndex }) {
  return (
    <div
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
          onClick={
            infoActive && data.id == modalIndex
              ? null
              : () => handleModal(data.id)
          }
        >
          {!(infoActive && data.id == modalIndex) ? (
            <div
              className={classes.popupContainerClosed}
              // onClick={() => handleModal(data.id)}
            >
              <p>More</p>
            </div>
          ) : (
            <div className={classes.popupContainerOpen}>
              <div>
                <h2>{whatWeDoData[modalIndex - 1].title}</h2>
                <p>{whatWeDoData[modalIndex - 1].info.paragraph}</p>
                <p>{whatWeDoData[modalIndex - 1].info.paragraph2}</p>
                <p>{whatWeDoData[modalIndex - 1].info.paragraph3}</p>
              </div>
              <div
                className={classes.lessContainer}
                onClick={() => handleModal(data.id)}
              >
                <p>Less</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicePage() {
  const [modalIndex, setModalIndex] = useState(null);
  const [infoActive, setInfoActive] = useState(false);

  const handleModal = (id) => {
    console.log("CLICK");
    if (modalIndex == id) {
      setInfoActive((val) => !val);
    }
    if (modalIndex != id) {
      setInfoActive(true);
    }
    setModalIndex(id);
  };

  return (
    <>

      <div className="header">
        <h1>SERVICES</h1>
        <hr />
      </div>
      <section className={classes.page}>
        {whatWeDoData.map((element) => (
          <ServiceItem
            key={element.id}
            data={element}
            handleModal={handleModal}
            modalIndex={modalIndex}
            infoActive={infoActive}
          />
        ))}
        <WhatWeDoMobileSwiper />
      </section>
    </>
  );
}
