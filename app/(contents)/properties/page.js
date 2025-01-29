/** @format */
"use server";

import classes from "./page.module.css";
import { getAllProperties } from "@/server/actions/contentful/get-user-properties";
import Link from "next/link";
import Image from "next/image";
import pdfImage from "/public/images/icons/pdf1.png";
import locationIcon from "/public/images/icons/icons8-location-pin-100.png";
import messageIcon from "/public/images/icons/envelopeios.png";

function PropertyItem({ data }) {
  const { title, primaryImage, information, pdf, location } = data.fields;

  // console.log(location);

  return (
    <>
      <li>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={`https:${primaryImage.fields.file.url}`}
            alt={primaryImage.fields.description}
            width={800}
            height={600}
          />
          <div className={classes.backdropHover} />
        </div>
        <div className={classes.infoContainer}>
          <h2>{title}</h2>

          <div className={classes.subItemContainer}>
            <p>{information}</p>
          </div>
          {/* <div className={classes.messageContainer}>
            <Image
              className={classes.messageIcon}
              src={messageIcon}
              alt="An icon image of an envelope representing a message"
            />
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <div className={classes.iconContainer}>
            <Image
              className={classes.icon}
              src={pdfImage}
              alt={pdf.fields.title}
            />
            <Link href={`https:${pdf.fields.file.url}`} download>
              <p>Download pdf</p>
            </Link>
          </div> */}
        </div>
      </li>
    </>
  );
}

export default async function PropertiesPage() {
  //   const { user } = await validateRequest();
  //   const headerList = headers();
  //   const pathname = headerList.get("x-current-path");

  const results = await getAllProperties();

  if (results.errorMessage) {
    // console.log(results.errorMessage);
  }

  //   if (!user) {
  //     redirect(`/login?next=${pathname}`);
  //   }

  return (
    <>
      <title>INDIGO Consulting Properties Page</title>
      <div className="header">
        <h1>PROPERTIES FOR SALE</h1>
        <hr />
      </div>
      <div className={classes.subSubHeader}>
        <p>
          Welcome to the luxurious selection of properties curated by Indigo
          Consulting.Explore ongoing developments meticulously managed by our
          consultancy services, tailored for discerning investors. Discover
          carefully selected future projects endorsed by investors in
          collaboration with Indigo Consulting.From developers not directly
          affiliated with our consultancy.
        </p>
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {results.map((element) => (
            <PropertyItem key={element} data={element} />
          ))}
        </ul>
      </div>
    </>
  );
}
