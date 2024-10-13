/** @format */
"use client";
import classes from "./submit-button.module.css";
import { ShimmerButton } from "shimmer-effects-react";
export function PendingButton({ children }) {
  return (
    <button disabled className={classes.pendingButton}>
      {children}
    </button>
  );
}
