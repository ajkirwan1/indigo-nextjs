/** @format */

"use client";
import classes from "./add-property.module.css";
import { useFormState } from "react-dom";
import ImagePicker from "@/components/images/image-picker";

export default function AddPropertyImage({ action }) {
  const [state, formAction] = useFormState(action, {
    message: null,
  });

  return (
    <>
      <form className={classes.form} action={formAction}>
        <ImagePicker label="Image" name="image" />

        {/* {state.message && <p>{state.message}</p>} */}
        {/* <p className={classes.actions}> */}
        {/* <button>SUBMIT</button> */}
        {/* </p> */}
      </form>
    </>
  );
}
