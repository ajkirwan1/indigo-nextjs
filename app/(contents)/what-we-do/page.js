/** @format */
import classes from "./page.module.css";
import WebItemComponent from "@/components/web-item-component";
import { whatWeDoData } from "@/data/what-we-do-data";

export default function WhatWeDoPage() {
  return (
    <>
      <div className={classes.subHeader}>
        <h1>WHAT WE DO</h1>
      </div>
      <section className={classes.section1}>
        <WebItemComponent
          title={whatWeDoData[0]["title"]}
          paragraph1={whatWeDoData[0]["info"]["paragraph"]}
          paragraph2={whatWeDoData[0]["info"]["paragraph2"]}
          image={whatWeDoData[0]["image"]}
        />
        <WebItemComponent
          title={whatWeDoData[1]["title"]}
          paragraph1={whatWeDoData[1]["info"]["paragraph"]}
          image={whatWeDoData[1]["image"]}
        />
        <WebItemComponent
          title={whatWeDoData[2]["title"]}
          paragraph1={whatWeDoData[2]["info"]["paragraph"]}
          paragraph2={whatWeDoData[2]["info"]["paragraph2"]}
          image={whatWeDoData[2]["image"]}
        />
        <WebItemComponent
          title={whatWeDoData[3]["title"]}
          paragraph1={whatWeDoData[3]["info"]["paragraph"]}
          paragraph2={whatWeDoData[3]["info"]["paragraph2"]}
          paragraph3={whatWeDoData[3]["info"]["paragraph3"]}
          image={whatWeDoData[3]["image"]}
          buttonText={whatWeDoData[3]["button"]["text"]}
          buttonPath={whatWeDoData[3]["button"]["href"]}
        />
        <WebItemComponent
          title={whatWeDoData[4]["title"]}
          paragraph1={whatWeDoData[4]["info"]["paragraph"]}
          paragraph2={whatWeDoData[4]["info"]["paragraph2"]}
          image={whatWeDoData[4]["image"]}
          buttonText={whatWeDoData[4]["button"]["text"]}
          buttonPath={whatWeDoData[4]["button"]["href"]}
        />
        <WebItemComponent
          title={whatWeDoData[5]["title"]}
          paragraph1={whatWeDoData[5]["info"]["paragraph"]}
          image={whatWeDoData[4]["image"]}
          buttonText={whatWeDoData[5]["button"]["text"]}
          buttonPath={whatWeDoData[5]["button"]["href"]}
        />
        <WebItemComponent
          title={whatWeDoData[6]["title"]}
          paragraph1={whatWeDoData[6]["info"]["paragraph"]}
          image={whatWeDoData[6]["image"]}
        />
        <WebItemComponent
          title={whatWeDoData[7]["title"]}
          paragraph1={whatWeDoData[7]["info"]["paragraph"]}
          image={whatWeDoData[7]["image"]}
        />
      </section>
    </>
  );
}
