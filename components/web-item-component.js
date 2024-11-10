/** @format */

import classes from "./web-item-component.module.css";
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
      </div>

      <div className={classes.imageButton}>
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
      </div>
    </div>
  );
}
