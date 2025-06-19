'use client'
import classes from "./link-button.module.css";
import Link from 'next/link';
import Button from "../../button";
export default function LinkButton({ children, location }) {


  return (
    <Link href={location} className={classes.linked}>
      <Button>
        {children}
      </Button>
    </Link>
  );
}