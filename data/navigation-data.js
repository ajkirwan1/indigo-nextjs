/** @format */
"use client";
import User from "@/components/layouts/user";
import { useSession } from "@/contexts/session-context";

export default function GetNavData() {
  const { user } = useSession();

  // console.log(user);

  const navigationData = [
    {
      title: "INDIGO",
      url: "/who-we-are",
      submenu: [
        {
          title: "About us",
          url: "/who-we-are",
        },
        {
          title: "Projects",
          url: "/projects",
        },
        {
          title: "News",
          url: "/blog",
        },
      ],
    },

    {
      title: "SERVICES",
      url: "/what-we-do",
      submenu: [
        {
          title: "What we do",
          url: "/what-we-do",
        },
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
      title: user ? "ACCOUNT_LOGGED_IN" : "ACCOUNT",
      accountIcon: true,
      url: "/contact",
      submenu: [
        user
          ? { title: user.username.toUpperCase(), url: "" }
          : { title: "Register", url: "/register" },
        user
          ? {
              title: "Logout",
              url: "/logout",
            }
          : {
              title: "Login",
              url: "/login",
            },
      ],
    },
  ];

  return navigationData;
}
