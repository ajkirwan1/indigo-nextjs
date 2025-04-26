/** @format */
'use client'
import { useState } from "react";
import Dropdown from "./dropdown";
import NavLink from "@/components/nav-link";
import classes from "./sub-header.module.css";
// import { useSession } from "@/contexts/session-context";
import { MdOutlineAccountCircle } from "react-icons/md";

// import Image from "next/image";

export default function NavigationItems({ items, session }) {
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
            {/* <p>name</p> */}
            {dropdown && (
              <Dropdown submenus={items.submenu} dropdown={dropdown} session={session}/>
            )}
          </>
        ) : items.submenu && items.title == "ACCOUNT_LOGGED_IN" ? (
          <>
            <div className={classes.accountIcon} onMouseOver={() => setDropdown(true)}>
              <MdOutlineAccountCircle color="white" size="40px" />
            </div>
            {dropdown && (
              <Dropdown submenus={items.submenu} dropdown={dropdown} />
            )}
          </>
        ) : (
          <NavLink href={items.url}>{items.title}</NavLink>
        )}
      </li>
      {/* {items.accountIcon && <p>Icon</p>} */}
    </ul>
  );
}
