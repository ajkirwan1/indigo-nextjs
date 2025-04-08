/** @format */
"use client";

import classes from "./sub-header.module.css";
import NavigationItems from "./navigation-items";
import { SignIn } from "@/components/forms/sign-in/sign-in-form";

export default function DesktopNav({ data }) {
  return (
    <>
      <div className={classes.desktopNav}>
        <ul className={classes.menus}>
          {data.map((menu, index) => {
            return <NavigationItems items={menu} key={index} />;
          })}
          <li>
            <SignIn>asdasdsad</SignIn>
          </li>
        </ul>
      </div>
    </>
  );
}
