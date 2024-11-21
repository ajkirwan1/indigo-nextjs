/** @format */

"use client";
import classes from "./page.module.css";
import { useFormState } from "react-dom";
import ImagePicker from "@/components/images/image-picker";
import PdfPicker from "@/components/pdfs/pdf-picker";
import { AddProperty } from "@/server/actions/db/admin/properties/add-property";
import AddPropertyInfo from "@/components/forms/admin/properties/add-property-info";
import AddPropertyImage from "@/components/forms/admin/properties/add-property-image";
import AddPropertyPdf from "@/components/forms/admin/properties/add-property-pdf";
import { AddPropertyImageAction } from "@/server/actions/db/admin/properties/add-property-image-action";
import Link from "next/link";

export default function AddProperties() {
  // const [state, formAction] = useFormState(AddProperty, { message: null });
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

        <AddPropertyImage action={AddPropertyImageAction} />
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
        <AddPropertyPdf />
      </div>
      <div className={classes.itemWrapper}>
        <h2>Step 3 - Provide property details</h2>
        <AddPropertyInfo />
      </div>
    </>
  );
}
