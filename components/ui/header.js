/** @format */

import classes from "./header.module.css";
import NavLink from "@/components/nav-link";
export default function Header({ className }) {
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
            <NavLink href="/who-we-are">WHO WE ARE</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/what-we-do">WHAT WE DO</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/projects">PROJECTS</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/contact">CONTACT</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/sign-in">SIGN IN</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
