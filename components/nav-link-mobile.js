/** @format */
"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { useRouter } from "next/navigation";

export default function NavLinkMobile({ children, href, handleMobileIcon }) {
  const router = useRouter();

  const handleClick = async (event) => {
    event.preventDefault();
    const evnt =  router.push(href);
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    handleMobileIcon();
  };

  return (
    <Link href={href} className={classes.link} onClick={handleClick}>
      {children}
    </Link>
  );
}
