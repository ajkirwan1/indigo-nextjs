/** @format */
import { useState } from "react";
import Dropdown from "./dropdown";
import { motion } from "framer-motion";
import NavLink from "@/components/nav-link";
import classes from "./header.module.css";
import NavLinkMobile from "@/components/nav-link-mobile";

export default function MobileNavigationItems({ items, handleMobileIcon }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
    >
      <div className={classes.menuItems}>
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
          <NavLinkMobile href={items.url} handleMobileIcon={handleMobileIcon}>
            <h1>{items.title}</h1>
          </NavLinkMobile>
        )}
      </div>
    </div>
  );
}
