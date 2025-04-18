/** @format */

import classes from "./submit-button.module.css";
export default function TableSubmitButton({ children, disabled }) {
  return (
    <>
      <button className={disabled ? `${classes.button} ${classes.disabled}` : `${classes.button}`} type="submit" disabled={disabled} >
        {children}
      </button>
    </>
  );
}
