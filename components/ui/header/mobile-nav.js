/** @format */

import  MobileNavigationItems  from "./mobile-navigation-items";
import classes from "./header.module.css";

export default function MobileNavbar({data}) {
  return (
    <div
      className={`${classes.mobileNavContainer} ${classes.mobileNavMenuActive}`}
    >
      <nav className={classes.desktopNav}>
        <ul className={classes.menus}>
          {data.map((menu, index) => {
            return <MobileNavigationItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
