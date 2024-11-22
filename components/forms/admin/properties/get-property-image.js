/** @format */

"use client";
import classes from "./add-property.module.css";

import ImageGetter from "@/components/images/image-getter";

export default function GetPropertyImage({ handlePickClick }) {
  // const [state, formAction] = useFormState(action, {
  //   message: null,
  // });

  return (
    <>
      {/* <form className={classes.getProperty} action={formAction}> */}
      <ImageGetter />
      {/* <button onClick={handlePickClick}> get data</button> */}

      {/* {state.message && <p>{state.message}</p>} */}
      {/* <p className={classes.actions}> */}
      {/* <button>SUBMIT</button> */}
      {/* </p> */}
      {/* </form> */}
    </>
  );
}
