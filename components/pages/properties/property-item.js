/** @format */

import Link from "next/link";
import Image from "next/image";

import classes from "property-item.module"

export default function PropertyItem({ id, slug }) {
  return (
    <div className={classes.img}>
      <Link href={`/property/${id}`}>
        <Image
          src={`/images/pages/properties/${slug}`}
          alt="alt"
          width={1920}
          height={960}
          layout="responsive"
        />
      </Link>
    </div>
  );
}
