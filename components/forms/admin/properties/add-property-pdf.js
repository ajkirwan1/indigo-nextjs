/** @format */

"use client";
import classes from "./add-property.module.css";
import { useFormState } from "react-dom";
import PdfPicker from "@/components/pdfs/pdf-picker";
import AddPropertyInfo from "@/components/forms/admin/properties/add-property-info";
import { AddPropertyPdfAction } from "@/server/actions/db/admin/properties/add-property-pdf-action";

export default function AddPropertyPdf() {
  const [state, formAction] = useFormState(AddPropertyPdfAction, {
    message: null,
  });
  return (
    <>
      <form className={classes.form} action={formAction}>
        <PdfPicker label="Pdf" name="pdf" />

        {/* {state.message && <p>{state.message}</p>} */}
        {/* <p className={classes.actions}> */}
        {/* </p> */}
      </form>
    </>
  );
}
