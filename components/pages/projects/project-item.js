/** @format */

import Link from "next/link";
import Image from "next/image";

import classes from "./project-item.module.css";

export default function ProjectItem({ id, slug }) {
  return (
    <div className={classes.img}>
      <Link href={`/projects/${id}`}>
        <Image
          src={slug}
          alt="alt"
          width={1920}
          height={960}
          layout="responsive"
        />
      </Link>
    </div>
  );
}
