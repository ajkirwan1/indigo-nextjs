/** @format */
"use client";

import classes from "./what-we-do-swiper-mobile.module.css";
import { whatWeDoData } from "@/data/what-we-do-data";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ServiceItem from "./service-item";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function WhatWeDoMobileSwiper() {
  const [modalIndex, setModalIndex] = useState(null);
  const [infoActive, setInfoActive] = useState(false);

  // const swiper = useSwiper();

  const handleModal = (id) => {
    // console.log("CLICK");
    if (modalIndex == id) {
      setInfoActive((val) => !val);
      // swiper.pause()
    }
    if (modalIndex != id) {
      setInfoActive(true);
    }
    setModalIndex(id);
    // swiper.pause()
  };

  return (
    <>
      <div className={classes.swiperContainer}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "25px",
          }}
          className={classes.swiperInnerContainer}
          spaceBetween={5}
          // onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
        >
          {whatWeDoData.map((element, index) => (
            <SwiperSlide key={index} className={classes.swiperSlide}>
              <ServiceItem
                key={element.id}
                data={element}
                handleModal={handleModal}
                modalIndex={modalIndex}
                infoActive={infoActive}
                className="mobile-swiper"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
