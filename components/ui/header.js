/** @format */
"use client";

import classes from "./header.module.css";
import NavLink from "@/components/nav-link";
import { useSession } from "@/contexts/session-context";
export default function Header({ className }) {
  const { session, user } = useSession();

  console.log("Header session", session);
  console.log("User session", user);

  function AdminNav() {
    return (
      <>
        <NavLink href="/admin">Admin</NavLink>
      </>
    );
  }

  function LogInNav() {
    return (
      <>
        <NavLink href="/login">Login</NavLink>
      </>
    );
  }

  function LogOutNav() {
    return (
      <>
        <NavLink href="/logout">Logout</NavLink>
      </>
    );
  }

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
            <NavLink href="/properties">Properties</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            <NavLink href="/consulting">Consulting</NavLink>
          </li>
          <li className={classes.hoverEffect}>
            {session ? <LogOutNav /> : <LogInNav />}
          </li>
          <li>{user?.adminUser ? <AdminNav /> : null}</li>
        </ul>
      </nav>
    </header>
  );
}
