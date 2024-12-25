/** @format */
"use client";

import IndigoLogo from "/public/Indigo_Logo_Transparent.png";
import classes from "./header.module.css";
import Link from "next/link";
import { useSession } from "@/contexts/session-context";
import MobileMenuIcon from "./mobile-menu-icon";
import DesktopNav from "./desktop-nav";
import { navigationData } from "@/data/navigation-data";
import { adminNavigationData } from "@/data/admin-navigation-data";
import Image from "next/image";

export default function Header({ className }) {

  const { user } = useSession();

  return (
    <>
      <header className={className}>
        <nav className={classes.nav}>
          <Link href="/">
            <Image
              priority
              src={IndigoLogo}
              alt="The logo for indigo"
              className={classes.logoIndigo}
            />
          </Link>
          <DesktopNav
            data={user?.adminaccess == 2 ? adminNavigationData : navigationData}
          />
          <div className={classes.mobileIconContainer}>
            <MobileMenuIcon />
          </div>
        </nav>
      </header>
    </>
  );
}
