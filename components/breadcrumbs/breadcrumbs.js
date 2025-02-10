/** @format */

"use client";
import classes from "./breadcrumbs.module.css";

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function BreadCrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className={classes.breadCrumbWrapper}>
      <ul className={classes.list}>
        <li>
          <Link href="/">Home</Link>
          <span> /&nbsp; </span>
        </li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length)
          
          return (
            <li key={index}>
              <Link href={href}>{itemLink.replaceAll("-", " ")}</Link>
              {pathNames.length !== index + 1 && <><span>&nbsp;/&nbsp;</span></>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
