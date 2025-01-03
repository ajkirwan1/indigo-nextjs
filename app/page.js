/** @format */
"use client";

import Header from "@/components/ui/header/header";
import Overlay from "@/components/overlay";
import Image from "next/image";
import classes from "./page.module.css";
import circle from "/public/images/pages/home/circledwh.png";
import heroImage from "/public/images/pages/home/greecehero1.jpg";
import poshImage from "/public/images/pages/home/hero2people.jpg";
import swimmingImage from "/public/images/pages/home/swimming.jpg";
import buildingImage from "/public/images//pages/home/building.jpg";
import HeroComponent from "@/components/hero/hero-component";
import HomepageCarousel from "@/components/homepage-carousel";
import { motion } from "framer-motion";
import properties from "/public/images/pages/home/properties.png";
import envelope from "/public/images/pages/home/envelope.png";
import { useSession } from "@/contexts/session-context";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.5,
      delay: 0.5,
      bounce: 0,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
    },
  },
};

const componentArray = [
  <div key={1} className={classes.heroWrapper}>
    <HeroComponent heroImage={heroImage} altText="Alt text">
      <motion.div
        className={classes.heroContents}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Overlay>
          <div>
            <h1>GUIDING VISIONS, MANAGING REALITIES</h1>
            <h1>YOUR PARTNER IN DEVELOPMENT CONSULTING & MANAGEMENT</h1>
          </div>
        </Overlay>
      </motion.div>
    </HeroComponent>
  </div>,
  <div key={2} className={classes.heroWrapper}>
    <HeroComponent heroImage={swimmingImage} altText="Alt text">
      <div className={classes.heroContents}>
        <motion.div
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          className={classes.heroInnerContents}
        >
          <motion.h2 layout className={classes.sectionTitle} variants={item}>
            OUR SERVICES
          </motion.h2>
          <div className={classes.listContainer}>
            <motion.div layout className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Development Consultancy</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
            <motion.div layout className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Development Opportunities Sourcing</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
            <motion.div className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Development Project Management</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
            <motion.div className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Market Analysis</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
            <motion.div className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Property Management</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
            <motion.div className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Redevelopment Development Projects</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
            <motion.div className={classes.separator} variants={item}>
              <div className={classes.service}>
                <h3>Residency - Golden Visa</h3>
                <Image alt="icon" src={circle} className={classes.circleIcon} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </HeroComponent>
  </div>,
  <div key={3} className={classes.heroWrapper}>
    <HeroComponent heroImage={buildingImage} altText="Alt text">
      <div className={classes.heroContents}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className={classes.heroInnerContents}
        >
          <motion.h2 className={classes.sectionTitle} variants={item}>
            PROPERTIES
          </motion.h2>
          <div className={classes.box}>
            <motion.div className={classes.separator} variants={item}>
              <Link href="/projects">
                <h3>SAMPLES OF PROJECTS</h3>
                <Image
                  alt="icon"
                  src={properties}
                  className={classes.properties}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </HeroComponent>
  </div>,
  <div key={4} className={classes.heroWrapper}>
    <HeroComponent heroImage={poshImage} altText="Alt text">
      <div className={classes.heroContents}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className={classes.heroInnerContents}
        >
          <motion.h2 className={classes.sectionTitle} variants={item}>
            YOUR GATEWAY TO SUCCESSFUL REAL ESTATE INVESTMENTS IN GREECE
          </motion.h2>
          <motion.div className={classes.separator} variants={item}>
            <Link href="/contact">
              <motion.h3 variants={item}>LET&apos;S TALK</motion.h3>
              <Image alt="icon" src={envelope} className={classes.envelope} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </HeroComponent>
  </div>,
];
export default function Homepage() {
  // const { user } = useSession();
  // if (user?.adminaccess) {
  //   redirect("admin");
  // }
  return (
    <>
      <Header className={classes.heroHeader}></Header>
      <HomepageCarousel components={componentArray} />
    </>
  );
}
