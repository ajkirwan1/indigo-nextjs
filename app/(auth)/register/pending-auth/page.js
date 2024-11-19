/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import classes from "./page.module.css";
import HeroComponent from "@/components/hero/hero-component";
import { validateRequest } from "@/auth/lucia";
import heroImage from "/public/images/croppednight.jpg";

export default async function RegisterPage() {
  const { user, session } = await validateRequest();

  if (!user) {
    redirect("/login");
  }
  const userName = user.username;
  const userEmail = user.email;

  return (
    <>
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            <h2>Hi {userName}</h2>
            <p>
              Your request to Indigo has been received, and we will contact you
              shortly via your email {userEmail}
            </p>
          </div>
        </HeroComponent>
      </div>
    </>
  );
}
