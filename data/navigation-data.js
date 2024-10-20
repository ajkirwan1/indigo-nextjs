/** @format */
'use client'
export const navigationData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about-us",
    submenu: [
      {
        title: "What we do",
        url: "/what-we-do",
      },
      {
        title: "Who we are",
        url: "/who-we-are",
      },
    ],
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Indigo consulting",
        url: "/consulting",
      },
      {
        title: "Indigo properties",
        url: "/properties",
      },
    ],
  },
  {
    title: "Contact us",
    url: "/contact",
  },
  {
    title: "Account",
    url: "/contact",
    submenu: [
      {
        title: "Login",
        url: "/login",
      },
      {
        title: "Logout",
        url: "/logout",
      },
      {
        title: "Register",
        url: "/register",
      },
    ],
  },
];
