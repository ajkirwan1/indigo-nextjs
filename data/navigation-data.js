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
    {
      title: "SERVICES",
      url: "/services",
    },
    {
      title: "CONTACT US",
      url: "/contact",
    },
    {
      title: "REGISTER",
      url: "/register",
    },  
  ];

  return navigationData;
}
