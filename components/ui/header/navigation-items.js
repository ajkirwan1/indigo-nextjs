/** @format */
import { useState } from "react";
import { Dropdown } from "./dropdown";
import NavLink from "@/components/nav-link";
import classes from "./sub-header.module.css";

export function NavigationItems({ items }) {
  console.warn(items);
    const [dropdown, setDropdown] = useState(false);
  return (
    <ul className={classes.ulWrapper} onMouseLeave={() => setDropdown(false)}>
      <li className={classes.menuItems}>
        {items.submenu ? (
          <>
            <button
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
