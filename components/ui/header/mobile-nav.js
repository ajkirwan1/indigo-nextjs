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
      staggerChildren: 1,
      duration: 1,
      // delayChildren: 0.5,
      // delay: 0.3,
      // bounce: 0,
    },
  },
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
        <motion.nav
          // initial={{ opacity:0 }}
          // whileInView={{ opacity:1 }}
          // transition={{ duration: 0.1, delay: 0.3 }}
          // layout
          variants={container}
          initial="hidden"
          whileInView="show"
          className={
            mobileMenuOpen
              ? `${classes.desktopNav}`
              : `${classes.desktopNav} ${classes.hidden}`
          }
        >
          <ul className={classes.menus}>
            {data.map((menu, index) => {
              return (
                <MobileNavigationItems
                  handleMobileIcon={handleMobileIcon}
                  items={menu}
                  key={index}
                />
              );
            })}
          </ul>
        </motion.nav>
      </div>
    </>
  );
}
