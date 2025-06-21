/** @format */
'use client'
import { useState } from "react";
import Dropdown from "./dropdown";
import NavLink from "@/components/nav-link";
import classes from "./sub-header.module.css";
import { VscAccount } from "react-icons/vsc";

export default function NavigationItems({ items, session, className }) {

  const [dropdown, setDropdown] = useState(false);
  
  return (
    <ul className={classes.ulWrapper} onMouseLeave={() => setDropdown(false)}>
      <li className={classes.menuItems}>
        {items.submenu && items.title != "ACCOUNT_LOGGED_IN" ? (
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
            {dropdown && (
              <Dropdown submenus={items.submenu} dropdown={dropdown} session={session}/>
            )}
          </>
        ) : items.submenu && items.title == "ACCOUNT_LOGGED_IN" ? (
          <>
            <div className={classes.accountIcon} onMouseOver={() => setDropdown(true)}>
              <VscAccount color={className.includes("heroHeader") ? "white" : "#505050"} size="35px"/>
            </div>
            {dropdown && (
              <Dropdown submenus={items.submenu} dropdown={dropdown} session={session}/>
            )}
          </>
        ) : (
          <NavLink href={items.url}>{items.title}</NavLink>
        )}
      </li>
    </ul>
  );
}
