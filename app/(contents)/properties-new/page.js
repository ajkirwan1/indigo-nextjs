/** @format */
"use server";
import { redirect } from "next/navigation";
import { validateRequest } from "/auth/lucia";
import classes from "./page.module.css";
import { headers } from "next/headers";
import { getAllProperties } from "@/server/actions/contentful/get-user-properties";
import Link from "next/link";
import Image from "next/image";

function PropertyItem({ data }) {
  const { title, primaryImage, information } = data.fields;

  console.log(primaryImage)

  return (
    <>
      <div className={classes.ProjectItemWrapper}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={`https:${primaryImage.fields.file.url}`}
            alt={primaryImage.fields.description}
            width={800}
            height={600}
          />
        </div>
        <div className={classes.infoWrapper}>
          <h2>{title}</h2>
        </div>
        <div className={classes.subItemContainer}>
          <p>{information}</p>
        </div>
      </div>
    </>
  );
}

export default async function PropertiesPage() {
  const { user } = await validateRequest();
  const headerList = headers();
  const pathname = headerList.get("x-current-path");


  const results = await getAllProperties();
  console.log(results);
  if (results.errorMessage) {
    // throw new Error(result.error.message);
    console.log(results.errorMessage)
  }


  if (!user) {
    redirect(`/login?next=${pathname}`);
  }

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
        {results.map((element) => (
          <PropertyItem key={element} data={element} />
        ))}
      </div>
    </>
  );
}
