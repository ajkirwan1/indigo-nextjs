/** @format */

import classes from "./web-item-component.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/button";

export default function WebItemComponent(props) {
  return (
    <div
      className={
        props.className == "reverse"
          ? classes.sectionContainerReverse
          : classes.sectionContainer
      }
    >
      <div className={classes.buttonParagraphWrapper}>
        <motion.div
          initial={{
            x: -70,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.5 },
          }}
        >
          <div
            className={
              props.className == "reverse"
                ? classes.paragraphWrapperReverse
                : classes.paragraphWrapper
            }
          >
            {props.title && <h1>{props.title}</h1>}
            {props.subtitle && <h2>{props.subtitle}</h2>}
            <p>{props.paragraph1}</p>
            {props.paragraph2 && <p>{props.paragraph2}</p>}
            {props.paragraph3 && <p>{props.paragraph3}</p>}
            {props.paragraph4 && <p>{props.paragraph4}</p>}
          </div>
          {props.buttonPosition && (
            <div className={classes.buttonContainer}>
              <Button href={props.buttonPath}>{props.buttonText}</Button>
            </div>
          )}
        </motion.div>
      </div>

      <div className={classes.imageButton}>
        <motion.div
          initial={{
            scale: 0.92,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, delay: 1 },
          }}
        >
          <Image
            className={
              props.imageClassName == "smallImage"
                ? classes.smallImage
                : classes.image
            }
            src={`/${props.image}`}
            alt="alt"
            width={2048}
            height={1400}
          />
          {props.buttonPath && !props.buttonPosition && (
            <div className={classes.buttonContainer}>
              <Button href={props.buttonPath}>{props.buttonText}</Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
