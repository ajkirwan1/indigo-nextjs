/** @format */
"use client";

import classes from "./header.module.css";
import NavLink from "@/components/nav-link";

export default function DesktopNav() {

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/">
              <img className={classes.logoIndigo} src="/logoindigo.png"></img>
            </NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/who-we-are">Who we are</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/what-we-do">What we do</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/contact-us">Contact us</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/properties">Properties</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/consulting">Consulting</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/login">Login</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/register">Register</NavLink>
          </li>
          {/* <li className={classes.hoverEffect}>
            {session ? <LogOutNav /> : <LogInNav />}
          </li>
          <li>{user?.adminUser ? <AdminNav /> : null}</li> */}
        </ul>
      </nav>
    </>
  );
}
