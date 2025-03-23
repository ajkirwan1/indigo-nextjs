/** @format */
"use client";

import Header from "@/components/ui/header/header";
import Overlay from "@/components/overlay";
import Image from "next/image";
import classes from "./page.module.css";
import LinkButton from "@/components/ui/buttons/link-button/link-button";
import heroImage from "/public/images/pages/home/secondhero.jpg";
import swimmingImage from "/public/images/pages/home/istock.jpg";
import buildingImage from "/public/images//pages/home/pool3.jpg";
import HeroComponent from "@/components/hero/hero-component";
import HomepageCarousel from "@/components/homepage-carousel";
import { motion } from "framer-motion";
import properties from "/public/images/pages/home/properties.png";
import envelope from "/public/images/pages/home/envelope.png";
import { useSession } from "@/contexts/session-context";
import isoImage from "/public/images/pages/home/drone.jpg";
import Link from "next/link";
import FormSubmit from "@/components/forms/formsubmit";

const container = {
  hidden: { opacity: 0, y: 20 },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
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
            <h1>
              GUIDING VISIONS, MANAGING REALITIES
              <br />
              YOUR PARTNER IN DEVELOPMENT CONSULTING & MANAGEMENT
            </h1>
          </div>
        </Overlay>
      </motion.div>
    </HeroComponent>
  </div>,
  <div key={2} className={classes.heroWrapper}>
    <HeroComponent heroImage={swimmingImage} altText="Alt text">
      <motion.div
        className={classes.heroContents}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Overlay>
          <div layout variants={container} initial="hidden" whileInView="show">
            <h2 layout className={classes.sectionTitle} variants={item}>
              OUR SERVCES
            </h2>
            <div className={classes.listContainer}>
              <div layout className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Development Consultancy</h3>
                </div>
              </div>
              <div layout className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Development Opportunities Sourcing</h3>
                </div>
              </div>
              <div className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Development Project Management</h3>
                </div>
              </div>
              <div className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Market Analysis</h3>
                </div>
              </div>
              <div className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Property Management</h3>
                </div>
              </div>
              <div className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Redevelopment Development Projects</h3>
                </div>
              </div>
              <div className={classes.separator} variants={item}>
                <div className={classes.service}>
                  <h3>Residency - Golden Visa</h3>
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      </motion.div>
    </HeroComponent>
  </div>,
  <div key={3} className={classes.heroWrapper}>
    <HeroComponent heroImage={buildingImage} altText="Alt text">
      <motion.div
        className={classes.heroContents}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Overlay>
          <div
            variants={container}
            initial="hidden"
            whileInView="show"
            // className={classes.heroInnerContents}
          >
            <h2 className={classes.sectionTitle} variants={item}>
              SAMPLE PROJECTS & CONSULTING WORK
            </h2>
            <div className={classes.box}>
              <div className={classes.separator} variants={item}>
                <h3 style={{ lineHeight: "1.6" }}>
                  Discover examples of real estate redevelopments and advisory
                  services we’ve delivered worldwide
                </h3>
              </div>
            </div>
          </div>
          <div className={classes.submitButtonContainer}>
            <LinkButton location={"/case-studies"}>See our work</LinkButton>
          </div>
        </Overlay>
      </motion.div>
    </HeroComponent>
  </div>,
  <div key={4} className={classes.heroWrapper}>
    <HeroComponent heroImage={isoImage} altText="Alt text">
      <motion.div
        className={classes.heroContents}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Overlay>
          <div
            variants={container}
            initial="hidden"
            whileInView="show"
            // className={classes.heroInnerContents}
          >
            <h2 className={classes.sectionTitle} variants={item}>
              YOUR GATEWAY TO SUCCESSFUL REAL ESTATE INVESTMENTS IN GREECE
            </h2>
            <div className={classes.submitButtonContainer}>
            <LinkButton location={"/register"}>Register</LinkButton>
          </div>
          </div>
        </Overlay>
      </motion.div>
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
