/** @format */

import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import classes from "./header.module.css";
import { useState } from "react";

function Hamburger({handleMobileIcon}) {

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

function Cross({handleMobileIcon}) {

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileIcon = () => {
    setMobileMenuOpen(val => !val)
  }

  return (
    <>
      {mobileMenuOpen ? (
        <Hamburger handleMobileIcon={handleMobileIcon} />
      ) : (
        <Cross handleMobileIcon={handleMobileIcon} />
      )}
    </>
  );
}
