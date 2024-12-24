/** @format */

import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import classes from "./header.module.css";
import { useState, useEffect } from "react";
import MobileNavbar from "./mobile-nav";
import { navigationData } from "@/data/navigation-data";

function Hamburger({ handleMobileIcon }) {
  return (
    <div className={classes.hamburgerContainer}>
      <IoMenuOutline
        className={classes.hamburgerMenu}
        size="80px"
        color="black"
        onClick={handleMobileIcon}
      />
    </div>
  );
}

function Cross({ handleMobileIcon }) {
  return (
    <div className={classes.hamburgerContainer}>
      <RxCross2
        className={classes.hamburgerMenu}
        size="80px"
        color="black"
        onClick={handleMobileIcon}
      />
    </div>
  );
}

export default function MobileMenuIcon() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileIcon = () => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "scroll";
    }
    setMobileMenuOpen((val) => !val);
  };

  return (
    <>
      {mobileMenuOpen ? (
        <Cross handleMobileIcon={handleMobileIcon} />
      ) : (
        <Hamburger handleMobileIcon={handleMobileIcon} />
      )}
      {/* {mobileMenuOpen && <MobileNavbar data={navigationData} />} */}
      <MobileNavbar mobileMenuOpen={mobileMenuOpen} data={navigationData} />
    </>
  );
}
