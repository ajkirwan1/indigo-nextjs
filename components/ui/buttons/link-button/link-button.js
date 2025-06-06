'use client'
import classes from "./link-button.module.css";
import Link from 'next/link';
export default function LinkButton({ children, location }) {


  return (
    <Link href={location} className={classes.linked}>
      <button className={classes.button}>
        {children}
      </button>
    </Link>
  );
}