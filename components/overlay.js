/** @format */
"use client";
import classes from "./overlay.module.css";

export default function Overlay({ children }) {
  return <div className={classes.overlay}>{children}</div>;
}
