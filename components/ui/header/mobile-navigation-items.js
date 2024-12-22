/** @format */
import { useState } from "react";
import Dropdown from "./dropdown";
import { motion } from "framer-motion";
import NavLink from "@/components/nav-link";
import classes from "./header.module.css";

export default function MobileNavigationItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
    >
      <li className={classes.menuItems}>
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown(true)}
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
    </motion.div>
  );
}
