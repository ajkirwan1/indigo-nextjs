/** @format */

"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

const AdminContext = createContext({ showModal: false });

export const useAdmin = () => {
    return useContext(AdminContext)
}

export const AdminProvider = ({ children, value }) => {
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
