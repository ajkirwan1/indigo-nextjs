/** @format */
"use client";

import Link from "next/link";
import classes from "./registration-button.module.css";
import Image from "next/image";
import arrowIcon from "/public/images/arrow-right.png";

function DisplayButton({ children, onClick, disabled }) {
  return (
    <div
      onClick={onClick}
      // className={disabled ? `${classes.disabled}` : `${classes.wrapper}`}
      className={`${classes.wrapper}`}
    >
      <button
        // disabled={disabled == "disabled" ? disabled : null}
        className={classes.button}
      >
        {children}
      </button>
      {/* <Image src={arrowIcon} alt="alt" className={classes.arrow} /> */}
    </div>
  );
}

export default function RegistrationButton({ children, onClick, disabled }) {
  return (
    <>
      {disabled ? null : (
        <DisplayButton onClick={onClick}>
          {disabled ? null : children}
        </DisplayButton>
      )}
    </>
  );
}
