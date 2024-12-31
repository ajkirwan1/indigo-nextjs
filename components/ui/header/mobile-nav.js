/** @format */

import MobileNavigationItems from "./mobile-navigation-items";
import ModalBackdrop from "@/components/modal-backdrop";
import classes from "./header.module.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 2,
      delay: 0.1,
    },
  },
  remove: { backgroundColor: "#ffff", duration: 500 },
};

const item = {
  hidden: { opacity: 0, x: -5 },
  show: { opacity: 1, x: 0, transition: { ease: "easeIn" } },
};

export default function MobileNavbar({
  data,
  mobileMenuOpen,
  handleMobileIcon,
}) {
  return (
    <>
      {mobileMenuOpen && <ModalBackdrop />}
      <div
        className={
          mobileMenuOpen
            ? `${classes.mobileNavMenuActive}`
            : `${classes.mobileNavContainer}`
        }
      >
        <nav
          // initial={{ opacity:0 }}
          // whileInView={{ opacity:1 }}
          // transition={{ duration: 0.1, delay: 0.3 }}
          // layout
          // variants={container}
          // initial="hidden"
          // whileInView="show"
          // animate={mobileMenuOpen ? "remove" : null}
          className={
            mobileMenuOpen
              ? `${classes.desktopNav}`
              : `${classes.desktopNav} ${classes.hidden}`
          }
        >
          <motion.ul
            className={classes.menus}
            variants={container}
            initial="hidden"
            whileInView="show"
            // animate={mobileMenuOpen ? "remove" : null}
          >
            {data.map((menu, index) => {
              return (
                <motion.li key={index} variants={item}>
                  <MobileNavigationItems
                    handleMobileIcon={handleMobileIcon}
                    items={menu}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
      </div>
    </>
  );
}
