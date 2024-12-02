/** @format */

import classes from "./page.module.css";
import { projectsData } from "@/data/projects-data";
import Carousel from "@/components/carousel";
import { propertyData } from "@/public/data/data";
import ModalBackdrop from "@/components/modal-backdrop";
import Image from "next/image";

export default async function Project({ params }) {
  const data = projectsData[params.id - 1];

  return (
    <>
      <ModalBackdrop />
      <div className={classes.carouselOuterContainer}>
        <Image
          className={classes.image}
          src={`https:${primaryImage.fields.file.url}`}
          alt="alt"
          width={750}
          height={500}
        />
      </div>
    </>
  );
}
