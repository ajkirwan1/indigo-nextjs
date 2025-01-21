/** @format */
'use client'
import classes from "./sub-header.module.css";

import { useSession } from "next-auth/react";
import { Logout } from "@/server/actions/logout";
import { motion } from "framer-motion";
import NavLinkMobile from "@/components/nav-link-mobile";
// import { auth } from "@/auth";
import { signOut } from "@/auth";

export default function Dropdown({ submenus, dropdown, setDropdown }) {
  // const { data: session } = useSession()

  // let data;
  // if (session?.user) {
  //   data = submenus.filter((item) => {
  //     return item.title !== "Login";
  //   });
  // } else {
  //   data = submenus.filter((item) => {
  //     return item.title !== "Logout";
  //   });
  // }

  const handleLogout = () => {
    Logout();
    // signOut({ callbackUrl: "http://localhost:3000/" });
  };

  return (

      <ul
        className={
          dropdown
            ? `${classes.show} ${classes.dropdown}`
            : `${classes.dropdown}`
        }
        // onClick={setDropdown}
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
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <NavLinkMobile href={submenu.url}>{submenu.title}</NavLinkMobile>
            )}
          </motion.li>
        ))}
      </ul>
  );
}
