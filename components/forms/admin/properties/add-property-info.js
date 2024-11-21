/** @format */

"use client";
import classes from "./add-property.module.css";
import { useFormState } from "react-dom";
import { AddPropertyInfoAction } from "@/server/actions/db/admin/properties/add-property-info-action";

export default function AddPropertyInfo() {
  const [state, formAction] = useFormState(AddPropertyInfoAction, {
    message: null,
  });
  return (
    <>
      <h1>POPERTY DETAILS</h1>
      <form className={classes.form} action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <div className={classes.row}>
          <p>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" required />
          </p>
          <p>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" required />
          </p>
        </div>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            // @ts-ignore
            rows="10"
            required
          ></textarea>
        </p>
      </form>
    </>
  );
}
