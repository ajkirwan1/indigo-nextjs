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
    console.warn("CHANGE OF VIEW");
  };

  //   useEffect(() => {
  //     document.body.style.overflow = "scroll";
  //     if (window.innerWidth > 767) {
  //       setShowMobileNavMenu(false);
  //     } else if (window.innerWidth < 767) {
  //       setShowMobileNavMenu(true);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth > 767) {
  //         setShowMobileNavMenu(false);
  //         setMobileMenuOpen(false);
  //       } else if (window.innerWidth < 767) {
  //         setShowMobileNavMenu(true);
  //       }
  //     };

  return (
    <LayoutContext.Provider
      value={{
        handleLayoutChange,
        showMobileNavMenu,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
