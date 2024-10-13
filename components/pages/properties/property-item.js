/** @format */

import Link from "next/link";
import Image from "next/image";

import classes from "./property-item.module.css";

export default function PropertyItem({ id, image }) {
  return (
    <>
      <div className={classes.propertyItemContainer}>
        <h1>Title</h1>
        <Link href={`/pdfs/properties/Karikan_Realty_Φ19_Project_Book.pdf`} download>
          <Image
            className={classes.icon}
            src="/images/pages/properties/icon.svg"
            alt="alt"
            width={100}
            height={100}
            // layout="responsive"
          />
        </Link>
        <Image
          className={classes.img}
          src={`/images/pages/properties/${image}`}
          alt="alt"
          width={1920}
          height={960}
          // layout="responsive"
        />
      </div>
    </>
  );
}
