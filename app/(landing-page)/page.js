/** @format */
"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Overlay from "@/components/overlay";
import Button from "@/components/ui/button";
import classes from "./page.module.css";
import { propertyData } from "@/public/data/data";
import { Carousel } from "@/components/carousel";
import { useSession } from "../../contexts/session-context";

export default function Homepage() {
  const session = useSession();

  return (
    <>
      <div className="hero">
        <Header className={classes.header}></Header>
        <div className="hero-contents">
          <Overlay />
        </div>
      </div>
      <section id="section-1">
        <img className="section-1-image" src="./picture-1.jpg" alt="" />
        <div className={classes.paragraph}>
          <h1>TITLE 2</h1>
          <h2>DEVELOPMENT CONSULTANCY</h2>
          <h2>DEVELOPMENT OPPORTUNITIES SOURCING</h2>
          <h2>DEVELOPMENT PROJECT MANAGEMENT</h2>
        </div>
      </section>
      <section id="section-2">
        <div className={classes.paragraph}>
          <h1>TITLE 3</h1>
          <h2>MARKET ANALYSIS</h2>
          <h2>REDEVELOPMENT-DEVELOPMENT PROJECTS</h2>
          <h2>PROPERTY MANAGEMENT</h2>
          <h2>LEGAL&NOTARIAL SERVICES</h2>
        </div>
        <img className="section-2-image" src="./picture-2.jpg" alt="" />
      </section>
      <section className={classes.section3}>
        <h1>Section 3</h1>
        <div className={classes.section3Div}>
          <Carousel images={propertyData} />
        </div>
        <div className={classes.btnWrapper}>
          <Button href={session ? "/projects" : "/login"}>ALL PROJECTS</Button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
