/** @format */

"use client";

import classes from "./page.module.css";
import { useState } from "react";
import GetPropertyImage from "@/components/forms/admin/properties/get-property-image";
import GetPropertyPdf from "@/components/forms/admin/properties/get-property-pdf";
import AddPropertyInfo from "@/components/forms/admin/properties/add-property-info";
import { SubmitPropertyAction } from "@/server/actions/db/admin/properties/submit/submit-property-action";

import SubmitButton from "@/components/ui/buttons/submit-button";
import Link from "next/link";

export default function AddProperties() {
  const [data, setData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    pdfUrl: "",
    imageUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePdfUrl = (Url) => {
    setData({
      ...data,
      pdfUrl: Url,
    });
  };

  const handleImageUrl = (Url) => {
    setData({
      ...data,
      imageUrl: Url,
    });
  };

  const handleSubmitProperty = () => {
    SubmitPropertyAction(data);
  };

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
        <GetPropertyImage handleImageUrl={handleImageUrl} />
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
        <GetPropertyPdf handlePdfUrl={handlePdfUrl} />
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Step 3 - Provide property details</h2>
          <p>Please fill-in all fields</p>
          <div className={classes.linkWrapper}></div>
        </div>
        <AddPropertyInfo data={data} handleChange={handleChange} />
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Step 4 - Submit</h2>
          <p>Submit the property to the database</p>
          <div className={classes.linkWrapper}></div>
        </div>
        <div className={classes.submitButtonContainer}>
          <button onClick={handleSubmitProperty}>Add Property</button>
        </div>
      </div>
    </>
  );
}
