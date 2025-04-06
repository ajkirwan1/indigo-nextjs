/** @format */
"use client";
import User from "@/components/layouts/user";
import { useSession } from "@/contexts/session-context";

export default function GetNavData() {
  const { user } = useSession();

  // console.log(user);

const navigationData = [
    {
      title: "NEWS",
      url: "/news",
    },
    {
      title: "CASE STUDIES",
      url: "/case-studies",
    },
    {
      title: "WHO WE ARE",
      url: "/who-we-are",
    },
    /*
    {
      title: "ABOUT US",
      url: "/who-we-are",
      submenu: [
        // {
        //   title: "What we do",
        //   url: "/what-we-do",
        // },
        {
          title: "Who we are",
          url: "/who-we-are",
        },
      ],
    },
    */
    {
      title: "SERVICES",
      url: "/services",
    },
    // {
    //   title: "INDIGO PROPERTIES",
    //   url: "/properties",
    // },
    // {
    //   title: "SERVICES",
    //   url: "/what-we-do",
    //   submenu: [
    //     {
    //       title: "Services",
    //       url: "/what-we-do",
    //     },
    //     {
    //       title: "Indigo properties",
    //       url: "/properties",
    //     },
    //   ],
    // },
    {
      title: "CONTACT US",
      url: "/contact",
    },
    {
      title: "REGISTER",
      url: "/register",
    },
    // {
    //   title: "BLOG",
    //   url: "/blog",
    // },
    // {
    //   title: "ACCOUNT",
    //   url: "/contact",
    //   submenu: [
    //     {
    //       title: "Login",
    //       url: "/login",
    //     },
    //     {
    //       title: "Logout",
    //       url: "/logout",
    //     },
    //     {
    //       title: "Register",
    //       url: "/register",
    //     },
    //   ],
    // },
  ];

  return navigationData;
}
