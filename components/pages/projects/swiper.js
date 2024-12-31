/** @format */

"use client";
import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import classes from "./swiper.module.css";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

export default function SwiperComponent({ images }) {
  return (
    <Swiper
      className={classes.imgWrapper}
      modules={[Navigation, Pagination]}
      spaceBetween={20}
    //   slidesPerView={1}
      navigation={true}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((img) => (
        <SwiperSlide key={img} className={classes.swiperSlide}>
          <Image
            className={classes.img}
            width={1920}
            height={960}
            src={`https:${img}`}
            alt="alt"
            priority={true}
          />
        </SwiperSlide>
      ))}{" "}
      ...
    </Swiper>
  );
}
