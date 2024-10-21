/** @format */
"use client";
import classes from "./homepage-item-component.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
  // show: {
  //   opacity: 1,
  //   transition: {
  //     staggerChildren: 1,
  //   },
  // },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function HomepageItemComponent(props) {
  return (
    <div
      className={
        props.className == "left"
          ? classes.sectionContainer
          : `${classes.sectionContainerLeft}`
      }
    >
      <div className={classes.flexWrapper}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={classes.paragraphWrapper}
        >
          <motion.div variants={item} viewport={{ once: true }}>
            <Link href="/what-we-do">{props.paragraph1}</Link>
          </motion.div>
          <motion.div variants={item} viewport={{ once: true }}>
            <Link href="/what-we-do">{props.paragraph2}</Link>
          </motion.div>
          <motion.div variants={item} viewport={{ once: true }}>
            <Link href="/what-we-do">{props.paragraph3}</Link>
          </motion.div>
          <motion.div variants={item} viewport={{ once: true }}>
            {props.paragraph4 && <Link href="href">{props.paragraph4}</Link>}
          </motion.div>
        </motion.div>
      </div>
      <Image
        className={classes.image}
        src={`/${props.image}`}
        alt="alt"
        width={2048}
        height={1400}
      />
    </div>
  );
}
