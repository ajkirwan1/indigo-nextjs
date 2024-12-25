/** @format */

import classes from "./page.module.css";
import { projectsData } from "@/data/projects-data";
import Carousel from "@/components/carousel";
import { propertyData } from "@/public/data/data";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function Project({ params }) {
  const data = projectsData[params.id - 1];

  return (
    <>
      <ModalBackdrop />
      <div className={classes.carouselOuterContainer}>
        {/* <div className={classes.carouselContainer}> */}
        <Carousel images={propertyData} />
        {/* </div> */}
      </div>
    </>
  );
}
