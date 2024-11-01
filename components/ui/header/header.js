/** @format */
"use client";

import IndigoLogo from "/public/Indigo_Logo_Transparent.png";
import classes from "./header.module.css";
import NavLink from "@/components/nav-link";
import { useSession } from "@/contexts/session-context";
import MobileMenuIcon from "./mobile-menu-icon";
import MobileNavbar from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import LayoutContext from "@/contexts/layout-context";
import { navigationData } from "@/data/navigation-data";
import { useContext, useEffect } from "react";
import { adminNavigationData } from "@/data/admin-navigation-data";
import Image from "next/image";

export default function Header({ className }) {
  const { handleLayoutChange, showMobileNavMenu, mobileMenuOpen } =
    useContext(LayoutContext);

  const { user } = useSession();
  // console.log("HEADER", user)

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
        <nav className={classes.nav}>
          <NavLink href="/">
            <Image
              priority
              src={IndigoLogo}
              alt="The logo for indigo"
              className={classes.logoIndigo}
            />
          </NavLink>
          {!showMobileNavMenu ? (
            <DesktopNav
              data={user?.adminaccess == 2 ? adminNavigationData : navigationData}
            ></DesktopNav>
          ) : (
            <MobileMenuIcon />
          )}
        </nav>
      </header>
      {mobileMenuOpen && <MobileNavbar data={navigationData} />}
    </>
  );
}
