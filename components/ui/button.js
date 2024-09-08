/** @format */
"use client";
import { useSession } from "@/contexts/session-context";
import Link from "next/link";
import classes from "./button.module.css";
export default function Button({ children, onClick, href }) {
  return (
    <Link className={classes.link} href={href}>
      <div onClick={onClick} className={classes.wrapper}>
        <button className={classes.button}>{children}</button>
        <img className={classes.arrow} src="./images/arrow-right.png"></img>
      </div>
    </Link>
  );
}
