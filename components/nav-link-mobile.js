/** @format */

import Link from "next/link";
import classes from "./nav-link.module.css";
export default function NavLinkMobile({ children, href }) {
  return (
    <Link href={href} className={classes.link}>
      {children}
    </Link>
  );
}
