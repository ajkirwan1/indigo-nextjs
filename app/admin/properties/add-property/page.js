/** @format */

"use client";
// "use server";
import classes from "./page.module.css";
import { GetPropertyImageAction } from "@/server/actions/db/admin/properties/get-property-image-action";
import AddPropertyInfo from "@/components/forms/admin/properties/add-property-info";
import GetPropertyInfo from "@/components/forms/admin/properties/get-property-image";
import AddPropertyPdf from "@/components/forms/admin/properties/add-property-pdf";
// import { GetPropertyImageAction } from "@/server/actions/db/admin/properties/get-property-image-action";

import { AddPropertyImageAction } from "@/server/actions/db/admin/properties/add-property-image-action";
import SubmitButton from "@/components/ui/buttons/submit-button";
import Link from "next/link";

export default function AddProperties() {
  // const [state, formAction] = useFormState(AddProperty, { message: null });

  // const handlePickClick = async () => {
  //   const result = await GetPropertyImageAction();
  //   console.log(result);
  // };

  return (
    <>
      <div className={classes.subHeader}>
        <h1>ADD A PROPERTY</h1>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Step 1 - Pick an image</h2>
          <p>Search the database for an image that you have already uploaded</p>
          <div className={classes.linkWrapper}>
            <p>
              If you have not yet uploaded the desired image to the database,
              you can upload it here:
            </p>
            <Link href="/">UPLOAD IMAGE</Link>
          </div>
        </div>
        {/* <GetPropertyInfo data={propertyImageData} /> */}
        <GetPropertyInfo />
        {/* <button onClick={handlePropertyDataClick}></button> */}
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Step 2 - Pick a pdf</h2>
          <p>Search the database for a pdf that you have already uploaded</p>
          <div className={classes.linkWrapper}>
            <p>
              If you have not yet uploaded the desired pdf to the database, you
              can upload it here:
            </p>
            <Link href="/">UPLOAD PDF</Link>
          </div>
        </div>
        {/* <AddPropertyPdf /> */}
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Step 3 - Provide property details</h2>
          <p>Please fill-in all fields</p>
          <div className={classes.linkWrapper}></div>
        </div>
        {/* <AddPropertyInfo /> */}
      </div>
      {/* <div className={classes.submitButtonContainer}>
        <SubmitButton>Add Property</SubmitButton>
      </div> */}
    </>
  );
}
