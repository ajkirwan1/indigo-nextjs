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
      <div className={ props.className == "reverse" ? classes.paragraphWrapperReverse : classes.paragraphWrapper}>
        {props.title && <h1>{props.title}</h1>}
        {props.subtitle && <h2>{props.subtitle}</h2>}
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
        <p>{props.paragraph3}</p>
        <p>{props.paragraph4}</p>
        {props.buttonPath && (
          <div className={classes.buttonContainer}>
            <Button href={props.buttonPath}>{props.buttonText}</Button>
          </div>
        )}
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
