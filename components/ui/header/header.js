/** @format */
"use client";

import classes from "./header.module.css";
import NavLink from "@/components/nav-link";
import DesktopNav from "./desktop-nav";
import { useSession } from "@/contexts/session-context";
import { useContext, useEffect } from "react";
import LayoutContext from "@/contexts/layout-context";
export default function Header({ className }) {
  const { session, user } = useSession();
  const { handleLayoutChange, showMobileNavMenu, mobileMenuOpen } =
    useContext(LayoutContext);

  // console.log("Header session", session);
  // console.log("User session", user);

  useEffect(() => {
    document.body.style.overflow = "scroll";
    if (window.innerWidth > 767) {
      handleLayoutChange(false);
    } else if (window.innerWidth < 767) {
      handleLayoutChange(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        handleLayoutChange(false);
        // setMobileMenuOpen(false);
      } else if (window.innerWidth < 767) {
        handleLayoutChange(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // function AdminNav() {
  //   return (
  //     <>
  //       <NavLink href="/admin">Admin</NavLink>
  //     </>
  //   );
  // }

  // function LogInNav() {
  //   return (
  //     <>
  //       <NavLink href="/login">Login</NavLink>
  //     </>
  //   );
  // }

  // function LogOutNav() {
  //   return (
  //     <>
  //       <NavLink href="/logout">Logout</NavLink>
  //     </>
  //   );
  // }

  return (
    <header className={className}>
      {!showMobileNavMenu ? <DesktopNav></DesktopNav> : null}
      
    </header>
  );
}
