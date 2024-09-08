/** @format */

"use client";

import { createContext, useContext } from "react";

const SessionContext = createContext({
  session: null,
  user: null,
});

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children, value }) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
