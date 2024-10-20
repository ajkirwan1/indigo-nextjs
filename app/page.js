/** @format */
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import Overlay from "@/components/overlay";
import Button from "@/components/ui/button";
import classes from "./page.module.css";
import { propertyData } from "@/public/data/data";
import Carousel from "@/components/carousel";
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
      <div className={classes.subHeader}>
        <h1>WHAT WE OFFER</h1>
      </div>
        <section className={classes.section1}>
          <HomepageItemComponent
            paragraph1={homepageData[0]["info"]["paragraph"]}
            paragraph2={homepageData[0]["info"]["paragraph2"]}
            paragraph3={homepageData[0]["info"]["paragraph3"]}
            image={homepageData[0]["image"]}
          />
          <HomepageItemComponent
            paragraph1={homepageData[1]["info"]["paragraph"]}
            paragraph2={homepageData[1]["info"]["paragraph2"]}
            paragraph3={homepageData[1]["info"]["paragraph3"]}
            paragraph4={homepageData[1]["info"]["paragraph4"]}
            image={homepageData[1]["image"]}
          />

          {/* <img className="section-1-image" src="./picture-1.jpg" alt="" />
        <div className={classes.paragraph}>
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
        <img className="section-2-image" src="./picture-2.jpg" alt="" /> */}
        </section>
        <section className={classes.section3}>
          <h1>Section 3</h1>
          <div className={classes.section3Div}>
            <Carousel images={propertyData} />
          </div>
          <div className={classes.btnWrapper}>
            <Button href="/projects">ALL PROJECTS</Button>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
