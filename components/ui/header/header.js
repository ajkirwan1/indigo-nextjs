/** @format */
import classes from "./header.module.css";
import DesktopNav from "./desktop-nav";
import GetNavData from "@/data/navigation-data";
import { adminNavigationData } from "@/data/admin-navigation-data";
import BreadCrumb from "@/components/breadcrumbs/breadcrumbs";
import ImageHeader from "./image-header";
import { auth } from "@/auth";

export default async function Header({ className }) {

  const navigationData = GetNavData();

  const session = await auth()

  return (
    <>
      <header className={className}>
        <nav className={classes.nav}>
          <ImageHeader />
          <DesktopNav
            data={navigationData} session={session}
          />
          <div className={classes.mobileIconContainer}>
            {/* <MobileMenuIcon /> */}
          </div>
        </nav>
        {className.includes("non")  && <BreadCrumb />}
      </header>
    </>
  );
}
