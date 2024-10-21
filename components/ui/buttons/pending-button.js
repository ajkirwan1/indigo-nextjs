/** @format */
"use client";
import classes from "./submit-button.module.css";
export default function PendingButton({ children }) {
  return (
    <button disabled className={classes.pendingButton}>
      {children}
    </button>
  );
}
