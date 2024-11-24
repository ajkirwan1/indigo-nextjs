/** @format */

import classes from "./page.module.css";
import Image from "next/image";
import { GetSingleProperty } from "@/server/actions/db/admin/properties/get-properties/get-single-property";
import pdf from "/public/images/icons/icons8-pdf-100.png";
import Link from "next/link";

export default async function GetPropertyById({ params }) {
  const result = await GetSingleProperty(parseInt(params.id));

  return (
    <>
      <div className={classes.subHeader}>{/* <h1>{result}</h1> */}</div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>{result.title}</h2>
          <h2>{result.location}</h2>
          <h2>{result.price}</h2>
          <h2>{result.description}</h2>
          <div className={classes.linkWrapper}>
            <Image
              src={result.imageUrl}
              alt="An image picked by admin"
              height={960}
              width={1280}
              className={classes.image}
            />
          </div>
          <Link href={result.pdfUrl}>
            <Image
              src={pdf}
              alt="An image picked by admin"
              height={100}
              width={100}
            />
          </Link>

          <Link href="#">Edit </Link>
        </div>
      </div>
    </>
  );
}
