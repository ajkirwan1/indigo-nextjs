/** @format */
'use client'
export const navigationData = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "ABOUT US",
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
    title: "SERVICES",
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
    title: "CONTACT US",
    url: "/contact",
  },
  {
    title: "ACCOUNT",
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
