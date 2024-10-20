/** @format */

import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import classes from "./header.module.css";
import { useState } from "react";
import { useContext } from "react";
import LayoutContext from "@/contexts/layout-context";

function Hamburger() {
  const { handleBurger } = useContext(LayoutContext);

  const handleClick = () => {
    handleBurger(true);
  };

  return (
    <div className={classes.hamburgerContainer}>
      <IoMenuOutline
        className={classes.hamburgerMenu}
        size="80px"
        color="black"
        onClick={handleClick}
      />
    </div>
  );
}

function Cross() {
  const {
    handleLayoutChange,
    showMobileNavMenu,
    mobileMenuOpen,
    handleBurger,
  } = useContext(LayoutContext);
  const handleClick = () => {
    handleBurger(false);
  };

  return (
    <div className={classes.hamburgerContainer}>
      <RxCross2
        className={classes.hamburgerMenu}
        size="80px"
        color="black"
        onClick={handleClick}
      />
    </div>
  );
}

export default function MobileMenuIcon() {
  const {
    handleLayoutChange,
    showMobileNavMenu,
    mobileMenuOpen,
    handleBurger,
  } = useContext(LayoutContext);

  return <>{!mobileMenuOpen ? <Hamburger /> : <Cross />}</>;
}
