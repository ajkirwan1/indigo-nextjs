/** @format */

import classes from "./page.module.css";
import WebItemComponent from "@/components/web-item-component";
import { whoWeAreData } from "@/data/who-we-are-data";

export default function WhoWeArePage() {
  return (
    <>
      <div className={classes.subHeader}>
        <h1>WHO WE ARE</h1>
      </div>
      <section className={classes.section1}>
        <WebItemComponent
          paragraph1={whoWeAreData[0]["info"]["paragraph"]}
          paragraph2={whoWeAreData[0]["info"]["paragraph2"]}
          paragraph3={whoWeAreData[0]["info"]["paragraph3"]}
          image={whoWeAreData[0]["image"]}
        />
        <WebItemComponent
          className = "reverse"
          title={whoWeAreData[1]["title"]}
          subtitle={whoWeAreData[1]["subtitle"]}
          paragraph1={whoWeAreData[1]["info"]["paragraph"]}
          paragraph2={whoWeAreData[1]["info"]["paragraph2"]}
          paragraph3={whoWeAreData[1]["info"]["paragraph3"]}
          paragraph4={whoWeAreData[1]["info"]["paragraph4"]}
          image={whoWeAreData[1]["image"]}
        />
      </section>
    </>
  );
}
