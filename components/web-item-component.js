/** @format */

import classes from "./web-item-component.module.css";
import Image from "next/image";
import Button from "./ui/button";

export default function WebItemComponent(props) {
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.paragraphWrapper}>
        <h1>{props.title}</h1>
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
        <p>{props.paragraph3}</p>
      </div>
      <Image src={`/${props.image}`} alt="alt" width={50} height={50} />
      <Button href={"/"}>JSJKDJDSJKD</Button>
    </div>
  );
}
