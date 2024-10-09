/** @format */
"use client";

import classes from "./sub-header.module.css";
import { NavigationItems } from "./navigation-items";
// import NavLink from "@/components/nav-link";

export default function DesktopNav({ data }) {
  return (
    <>
      <div className={classes.desktopNav}>
        <ul className={classes.menus}>
          {data.map((menu, index) => {
            return <NavigationItems items={menu} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
}
