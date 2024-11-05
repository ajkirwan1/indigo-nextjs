/** @format */


import Header from "@/components/ui/header/header";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Overlay from "@/components/overlay";
import Image from "next/image";
import classes from "./page.module.css";
import HomepageItemComponent from "@/components/pages/homepage/homepage-item-component";
import heroImage from "/public/images/pages/home/greecehero1.jpg";
import poshImage from "/public/images/pages/home/hero2people.jpg";
import swimmingImage from "/public/images/pages/home/swimming.jpg";
import HeroComponent from "@/components/hero/hero-component";
import { homepageData } from "@/data/homepage-data";
import HomepageCarousel from "@/components/homepage-carousel";

const componentArray = [
  <div key={1} className={classes.heroWrapper}>
    <HeroComponent heroImage={heroImage} altText="Alt text">
      <div className={classes.heroContents}>
        <Overlay />
      </div>
    </HeroComponent>
  </div>,
  <div key={2} className={classes.heroWrapper}>
    <HeroComponent heroImage={swimmingImage} altText="Alt text">
      <div className={classes.heroContents}>
        <Overlay />
      </div>
    </HeroComponent>
  </div>,
  <div key={3} className={classes.heroWrapper}>
    <HeroComponent heroImage={poshImage} altText="Alt text">
      <div className={classes.heroContents}>
        <Overlay />
      </div>
    </HeroComponent>
  </div>,
];

export default function Homepage() {
  return (
    <>
      <Header className={classes.heroHeader}></Header>
      <HomepageCarousel components={componentArray} />
     </>
  );
}
