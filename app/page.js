/** @format */
import Header from "@/components/ui/header/header";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Overlay from "@/components/overlay";
import Image from "next/image";
import classes from "./page.module.css";
import HomepageItemComponent from "@/components/pages/homepage/homepage-item-component";
import { homepageData } from "@/data/homepage-data";

export default function Homepage() {
  return (
    <>
      <div className="hero">
        <Header className={classes.heroHeader}></Header>
        <div className="hero-contents">
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
          <hr />
          <HomepageItemComponent
            className={"left"}
            paragraph1={homepageData[1]["info"]["paragraph"]}
            paragraph2={homepageData[1]["info"]["paragraph2"]}
            paragraph3={homepageData[1]["info"]["paragraph3"]}
            paragraph4={homepageData[1]["info"]["paragraph4"]}
            image={homepageData[1]["image"]}
          />
        </section>
        <hr />
        <section className={classes.lower}>
          <h1>YOUR GATEWAY TO SUCCESSFUL REAL ESTATE INVESTMENTS IN GREECE</h1>
          <Image
            src="/images/pages/home/posh.jpg"
            alt="alt"
            width={1024}
            height={683}
            className={classes.poshImage}
          />
          <div className={classes.buttonContainer}>
            <Button href="/contact">LET&apos;S TALK</Button>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
