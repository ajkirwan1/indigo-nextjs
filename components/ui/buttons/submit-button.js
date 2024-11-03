/** @format */

import classes from "./submit-button.module.css";
export default function SubmitButton({ children }) {
  return (
    <>
      <div className={classes.wrapper}>
        <button className={classes.button}>
          {children}
          <img className={classes.arrow} src="/images/arrow-right.png"></img>
        </button>
      </div>
    </>
  );
}
