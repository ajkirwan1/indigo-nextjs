/** @format */
"use client";

import classes from "./header.module.css";
import NavLink from "@/components/nav-link";
import { useSession } from "@/contexts/session-context";
export default function Header({ className }) {
  const session = useSession();

  return (
    <header className={className}>
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
            <NavLink href="/contact-us">Contact us</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href={session ? "/properties" : "/login"}>
              Properties
            </NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href={session ? "/consulting" : "/login"}>
              Consulting
            </NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
