/** @format */
import { useState } from "react";
import Dropdown from "./dropdown";
import NavLink from "@/components/nav-link";
import classes from "./header.module.css";

export default function MobileNavigationItems({ items,handleMobileIcon }) {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    
    console.log("CLICK")
  };

  return (
    <li className={classes.menuItems}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={handleMobileIcon}
          >
            <h1>{items.title} </h1>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink href={items.url}>
          <h1>{items.title}</h1>
        </NavLink>
      )}
    </li>
  );
}
