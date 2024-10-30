/** @format */
import Header from "@/components/ui/header/header";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Overlay from "@/components/overlay";
import Image from "next/image";
import classes from "./page.module.css";
import HomepageItemComponent from "@/components/pages/homepage/homepage-item-component";
import heroImage from "/public/images/pages/home/greecehero1.jpg";
import poshImage from "/public/images/pages/home/hero2people.jpg";
import HeroComponent from "@/components/hero/hero-component";
import { homepageData } from "@/data/homepage-data";

export default function Homepage() {
  return (
    <>
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            priority
            alt="A background overlaid with text. The image displays Greece"
            src={heroImage}
            className={classes.imageHero}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <Header className={classes.heroHeader}></Header>
        <div className={classes.heroContents}>
          <Overlay />
        </div>
      </div>
      <main>
        <div className={classes.subHeader}></div>
        <section className={classes.section1}>
          <HomepageItemComponent
            title={homepageData[0]["title"]}
            paragraph1={homepageData[0]["info"]["paragraph"]}
            paragraph2={homepageData[0]["info"]["paragraph2"]}
            paragraph3={homepageData[0]["info"]["paragraph3"]}
            image={homepageData[0]["image"]}
          />
          <HomepageItemComponent
            className={"left"}
            paragraph1={homepageData[1]["info"]["paragraph"]}
            paragraph2={homepageData[1]["info"]["paragraph2"]}
            paragraph3={homepageData[1]["info"]["paragraph3"]}
            paragraph4={homepageData[1]["info"]["paragraph4"]}
            image={homepageData[1]["image"]}
          />
        </section>
      </main>
      {/* <div className={classes.heroWrapper}> */}
      <HeroComponent heroImage={poshImage} altText="Alt text">
        <h1>YOUR GATEWAY TO SUCCESSFUL REAL ESTATE INVESTMENTS IN GREECE</h1>
      </HeroComponent>
      {/* </div> */}
      <div className={classes.buttonContainer}>
        <Button href="/contact">LET&apos;S TALK</Button>
      </div>
      <Footer></Footer>
    </>
  );
}
