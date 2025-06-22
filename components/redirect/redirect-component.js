"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CircularProgress from "@mui/material/CircularProgress";
import HeroComponent from "@/components/hero/hero-component";
import classes from "./redirect-component.module.css";
import heroImage from "/public/images/croppednight.jpg";
import IndigoLogo from "/public/images/logodark.jpg";
import Image from "next/image";


export default function RedirectComponent() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // still loading session

    const timer = setTimeout(() => {
      if (!session) {
        router.replace("/"); // not logged in
        return;
      }
      // redirect based on role
      if (session.user.role === "admin") {
        router.replace("/admin");
      } else if (session.user.role === "user") {
        router.replace("/account");
      } else {
        router.replace("/");
      }
    }, 3000); // shorter delay for better UX

    return () => clearTimeout(timer);
  }, [status]);

  return (
      <div className={classes.pageWrapper}>
      <HeroComponent heroImage={heroImage} altText="Alt text" footer>
        <div className={classes.formcontainer} style={{ textAlign: "center", padding: "2rem" }}>
        <Image
              priority
              src={IndigoLogo}
              alt="The logo for indigo"
              className={classes.logoIndigo}
            />
          <p>Redirecting.....</p>
          <CircularProgress />
        </div>
      </HeroComponent>
    </div> 
  );
}
