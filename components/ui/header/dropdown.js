/** @format */
'use client'
import classes from "./sub-header.module.css";
import { motion } from "framer-motion";
import NavLinkMobile from "@/components/nav-link-mobile";
import { signOut } from "next-auth/react";

export default function Dropdown({ submenus, dropdown, setDropdown }) {

  const asynchandleLogout = () => {
    // Logout();
    signOut();
  };

  return (

      <ul
        className={
          dropdown
            ? `${classes.show} ${classes.dropdown}`
            : `${classes.dropdown}`
        }
      >
        {submenus.map((submenu, index) => (
          <motion.li
            key={index}
            className={classes.menuItems}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {submenu.title == "Logout" ? (
              <button onClick={async () => await signOut()}>Logout</button>
            ) : (
              <NavLinkMobile href={submenu.url}>{submenu.title}</NavLinkMobile>
            )}
          </motion.li>
        ))}
      </ul>
  );
}
