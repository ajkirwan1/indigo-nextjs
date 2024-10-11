/** @format */

"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

const LayoutContext = createContext();

export const useSession = () => {
  return useContext(LayoutContext);
};

export const LayoutProvider = ({ children }) => {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLayoutChange = (showMobileNavMenu) => {
    setShowMobileNavMenu(showMobileNavMenu);
  };

  const handleBurger = (value) => {
    setMobileMenuOpen(value);
  };

  return (
    <LayoutContext.Provider
      value={{
        handleLayoutChange,
        handleBurger,
        showMobileNavMenu,
        mobileMenuOpen
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
