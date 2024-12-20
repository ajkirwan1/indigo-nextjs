/** @format */

import classes from "./submit-button.module.css";
export default function SubmitButton({ children, id }) {
  return (
    <>
      <button className={classes.button} type="submit">
        {children}
        {/* <img className={classes.arrow} src="/images/arrow-right.png"></img> */}
      </button>
    </>
  );
}
