/** @format */
"use client";

import classes from "./page.module.css";
import { whatWeDoData } from "@/data/what-we-do-data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Overlay from "@/components/overlay";
import circle from "/public/images/pages/home/circledwh.png";
import WhatWeDoCarousel from "@/components/pages/what-we-do/what-we-do-carousel";
import { propertyData } from "@/public/data/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
      // delay: 0.5,
      bounce: 0,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
    },
  },
};

function Modal({ handleModal, modalIndex }) {
  console.log(modalIndex);
  return (
    <div className="modal-backdrop" onClick={handleModal}>
      <div className={classes.overlayWrapper}>
        <Overlay>
          <div className={classes.modalInfoWrapper}>
            <Image src={circle} />
            <h2>{whatWeDoData[modalIndex].title}</h2>
            <p>{whatWeDoData[modalIndex].info.paragraph}</p>
            <p>{whatWeDoData[modalIndex].info.paragraph2}</p>
            <p>{whatWeDoData[modalIndex].info.paragraph3}</p>
          </div>
        </Overlay>
      </div>
    </div>
  );
}

function ServiceItem({ data, handleModal }) {
  return (
    // <Link href={`projects/${data.id}`}>
    <div key={data.id}>
      <div
        className={classes.itemContainer}
        onClick={() => handleModal(data.id)}
      >
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={data.image}
            alt="alt"
            width={1000}
            height={1250}
          />
          <div className={classes.detailsContainer}>
            <h2>{data.title}</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>

        {/* <div className={classes.infoWrapper}>
          <h2>{data.title}</h2> */}
        {/* <p>{data.info.paragraph}</p> */}
        {/* <p className={classes.link}>
            <Link href="">MORE</Link>
          </p> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default function ServicePage() {
  const [viewport, setViewport] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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
    console.log(id, "IDDD");
    setModalIndex(id - 1);
    setModalOpen((val) => !val);
  };

  return (
    <>
      <title>INDIGO CONSULTING WHAT WE DO</title>
      {modalOpen ? (
        <Modal handleModal={handleModal} modalIndex={modalIndex} />
      ) : null}
      <div className={classes.header}>
        <h1>SERVICES</h1>
      </div>
      <section
        className={classes.page}
        layout
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {whatWeDoData.map((element) => (
          <div variants={item} key={item}>
            {/* {modalOpen ? <Modal handleModal={handleModal} /> : null} */}
            <ServiceItem
              data={element}
              handleModal={() => handleModal(element.id)}
            />
          </div>
        ))}
      </section>
      {/* <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image
            src="/images/pages/what-we-do/greece12.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT OPPORTUNITIES SOURCING</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/pages/what-we-do/devcon.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT CONSULTANCY</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/pages/what-we-do/construct.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT PROJECT MANAGEMENT</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
      </div> */}
      {/* <div className={classes.containerMiddle}>
        <div className={classes.imageContainer2}>
          <Image
            src="/images/pages/what-we-do/greece12.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT OPPORTUNITIES SOURCING</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
        <div className={classes.imageContainer2}>
          <Image
            src="/images/pages/what-we-do/devcon.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT CONSULTANCY</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
      </div> */}
      {/* <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image
            src="/images/pages/what-we-do/greece12.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT OPPORTUNITIES SOURCING</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/pages/what-we-do/devcon.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT CONSULTANCY</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/pages/what-we-do/construct.jpg"
            alt="alt"
            width={750}
            height={500}
            className={classes.image}
          />
          <div className={classes.detailsContainer}>
          <h2>DEVELOPMENT PROJECT MANAGEMENT</h2>
          </div>
          <div className={classes.moreContainer}>
            <p>More</p>
          </div>
        </div>
      </div> */}
      {/* <WhatWeDoCarousel images={propertyData}/> */}
    </>
  );
}
