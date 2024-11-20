/** @format */

"use client";
import classes from "./page.module.css";
import { useFormState } from "react-dom";
import ImagePicker from "@/components/images/image-picker";
import { AddProperty } from "@/server/actions/db/admin/properties/add-property";

export default function AddProperties() {
  const [state, formAction] = useFormState(AddProperty, { message: null });
  return (
    <>
      <h1>ADD PROPERTY</h1>

      <form className={classes.form} action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        {/* <p>
          <label htmlFor="summary">Short Summary</label>
          <input type="text" id="summary" name="summary" required />
        </p> */}
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
        <ImagePicker label="Image" name="image" />
        {/* {state.message && <p>{state.message}</p>} */}
        <p className={classes.actions}>
          {/* <MealsFormSubmit /> */}
          {/* <button type="submit">Share Meal</button> */}
          <button>SUBMIT</button>
        </p>
      </form>
    </>
  );
}
