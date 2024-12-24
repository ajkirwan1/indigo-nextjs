/** @format */

import MobileNavigationItems from "./mobile-navigation-items";
import classes from "./header.module.css";

export default function MobileNavbar({ data, mobileMenuOpen }) {

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
