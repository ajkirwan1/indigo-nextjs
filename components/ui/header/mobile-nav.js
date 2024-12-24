/** @format */

import MobileNavigationItems from "./mobile-navigation-items";
import classes from "./header.module.css";
import { useEffect } from "react";

export default function MobileNavbar({ data, mobileMenuOpen }) {
  // useEffect(() => {
  //   if (mobileMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = none;
  //   }

  //   return () => {
  //     document.body.style.overflow = none;
  //   };
  // }, [mobileMenuOpen]);
  return (
    <div
      className={
        mobileMenuOpen
          ? `${classes.mobileNavMenuActive}`
          : `${classes.mobileNavContainer}`
      }
    >
      <nav
        className={
          mobileMenuOpen ? `${classes.desktopNav}` : `${classes.desktopNav} ${classes.hidden}`
        }
      >
        <ul className={classes.menus}>
          {data.map((menu, index) => {
            return <MobileNavigationItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
