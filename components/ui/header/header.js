/** @format */
"use client";

import classes from "./header.module.css";
import NavLink from "@/components/nav-link";
import { MobileMenuIcon } from "./mobile-menu-icon";
import { MobileNavbar } from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import LayoutContext from "@/contexts/layout-context";
import { navigationData } from "@/data/navigation-data";
import { useSession } from "@/contexts/session-context";
import { useContext, useEffect } from "react";

export default function Header({ className }) {
  const { handleLayoutChange, showMobileNavMenu, mobileMenuOpen } =
    useContext(LayoutContext);

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
      } else if (window.innerWidth < 767) {
        handleLayoutChange(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <header className={className}>
        <NavLink href="/">
          <img className={classes.logoIndigo} src="/logoindigo.png"></img>
        </NavLink>
        {!showMobileNavMenu ? (
          <DesktopNav data={navigationData}></DesktopNav>
        ) : (
          <MobileMenuIcon />
        )}
      </header>
      {mobileMenuOpen && <MobileNavbar data={navigationData}/>}
    </>
  );
}
