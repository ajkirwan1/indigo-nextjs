/** @format */
import NavLink from "@/components/nav-link";
import classes from "./sub-header.module.css";
import { useSession } from "@/contexts/session-context";
import { motion } from "framer-motion";

export default function Dropdown({ submenus, dropdown, setDropdown }) {

  const {user} = useSession()

  let data;
  if (user) {
    data = submenus.filter((item) => {
      return item.title !== "Login";
    });
  } else {
    data = submenus.filter((item) => {
      return item.title !== "Logout";
    });
  }

  return (
    <ul
      className={
        dropdown ? `${classes.show} ${classes.dropdown}` : `${classes.dropdown}`
      }
    >
      {data.map((submenu, index) => (
        <motion.li
          key={index}
          className={classes.menuItems}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}        
          transition={{ duration: 1}}
        >
          <NavLink href={submenu.url}>
            {submenu.title}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
}
