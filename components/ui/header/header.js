/** @format */
"use client";

import IndigoLogo from "/public/images/logodark.jpg";
import IndigoLogo from "/public/images/logodark.jpg";
import classes from "./header.module.css";
import Link from "next/link";
import { useSession } from "@/contexts/session-context";
import MobileMenuIcon from "./mobile-menu-icon";
import DesktopNav from "./desktop-nav";
// import { navigationData } from "@/data/navigation-data";

import GetNavData from "@/data/navigation-data";
import { adminNavigationData } from "@/data/admin-navigation-data";
import Image from "next/image";
import BreadCrumb from "@/components/breadcrumbs/breadcrumbs";

export default function Header({ className }) {

  const navigationData = GetNavData();

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
        {className.includes("non")  && <BreadCrumb />}
      </header>
    </>
  );
}
