/** @format */
import { useState } from "react";
import  Dropdown  from "./dropdown";
import NavLink from "@/components/nav-link";
import classes from "./sub-header.module.css";

export default function NavigationItems({ items }) {
    const [dropdown, setDropdown] = useState(false);
  return (
    <ul className={classes.ulWrapper} onMouseLeave={() => setDropdown(false)}>
      <li className={classes.menuItems}>
        {items.submenu ? (
          <>
            <button
            className={classes.button}
              type="button"
              aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
                onMouseOver={() => setDropdown(true)}
            >
              {items.title}
            </button>
            {dropdown && <Dropdown submenus={items.submenu} dropdown={dropdown} />}
          </>
        ) : (
          <NavLink href={items.url}>{items.title}</NavLink>
        )}
      </li>
    </ul>
  );
}
