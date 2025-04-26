/** @format */
import NavLink from "@/components/nav-link";
import classes from "./sub-header.module.css";
import { useSession } from "@/contexts/session-context";
import { Logout } from "@/server/actions/logout";
import { motion } from "framer-motion";
import NavLinkMobile from "@/components/nav-link-mobile";
import { SignIn } from "@/components/forms/sign-in/sign-in-form";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default function Dropdown({ submenus, dropdown, setDropdown, session }) {
  return (
    <ul
      className={
        dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
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
          {submenu.title !== "SignIn" && submenu.title !== "SignOut" && (
            <NavLinkMobile href={submenu.url}>{submenu.title}</NavLinkMobile>
          )}
          {submenu.title === "SignIn" && !session && <SignIn />}
          {submenu.title === "SignOut" && session && <SignOutButton />}
        </motion.li>
      ))}
    </ul>
  );
}
