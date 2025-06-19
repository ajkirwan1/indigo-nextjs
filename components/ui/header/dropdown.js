/** @format */
import classes from "./sub-header.module.css";
import { motion } from "framer-motion";
import NavLinkMobile from "@/components/nav-link-mobile";
import { SignIn } from "@/components/forms/sign-in/sign-in-form";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default function Dropdown({ submenus, dropdown, setDropdown, session }) {
const res = session
  ? submenus.filter(submenu => submenu.title !== "REGISTER")
  : submenus.filter(submenu => submenu.title !== "ACCOUNT");

  return (
    <ul
      className={
        dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
      }
    >
      {res.map((submenu, index) => (
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
