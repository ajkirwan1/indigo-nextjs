/** @format */

"use client";
import classes from "./add-property.module.css";
import { useFormState } from "react-dom";
import ImageGetter from "@/components/images/image-getter";

export default function GetPropertyImage({ action }) {
  const [state, formAction] = useFormState(action, {
    message: null,
  });

  return (
    <>
      <form className={classes.getProperty} action={formAction}>
        <ImageGetter label="Image" name="image" />

        {/* {state.message && <p>{state.message}</p>} */}
        {/* <p className={classes.actions}> */}
        {/* <button>SUBMIT</button> */}
        {/* </p> */}
      </form>
    </>
  );
}
