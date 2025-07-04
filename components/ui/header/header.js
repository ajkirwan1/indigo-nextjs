/** @format */
import classes from "./header.module.css";
import DesktopNav from "./desktop-nav";
import GetNavData from "@/data/navigation-data";
import GetAdminNavData from "@/data/admin-navigation-data";
import { adminNavigationData } from "@/data/admin-navigation-data";
import BreadCrumb from "@/components/breadcrumbs/breadcrumbs";
import ImageHeader from "./image-header";
import { auth } from "@/auth";
import MobileMenuIcon from "./mobile-menu-icon";

export default async function Header({ className }) {

  const session = await auth()
  const navigationData = GetNavData(session);
  const adminNavData = GetAdminNavData();

  const role = session?.user.role;

  return (
    <>
      <header className={className}>
        <nav className={classes.nav}>
          <ImageHeader />
          <DesktopNav
            data={role == "admin" ? adminNavData : navigationData} session={session} className={className}
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
