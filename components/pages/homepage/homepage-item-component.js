/** @format */

import classes from "./homepage-item-component.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomepageItemComponent(props) {
  return (
    <div className={props.className == 'left' ? classes.sectionContainer : `${classes.sectionContainerLeft}`}>
      <div className={classes.flexWrapper}>
        <div className={classes.paragraphWrapper}>
          <Link href="/what-we-do">{props.paragraph1}</Link>
          <Link href="/what-we-do">{props.paragraph2}</Link>
          <Link href="/what-we-do">{props.paragraph3}</Link>
          {props.paragraph4 && <Link href="href">{props.paragraph4}</Link>}
        </div>
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
