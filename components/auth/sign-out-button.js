/** @format */

"use client";
import { signOut } from "next-auth/react";
import classes from "./sign-out-button.module.css";
export function SignOutButton() {
  return (
    <button className={classes.button} onClick={() => signOut()}>
      LOGOUT
    </button>
  );
}
