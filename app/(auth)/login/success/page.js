/** @format */

import classes from "./page.module.css";
import HeroComponent from "@/components/hero/hero-component";
import { validateRequest } from "@/auth/lucia";
import heroImage from "/public/images/croppednight.jpg";
import Link from "next/link";

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
            <h1>Hi {userName}</h1>
            <Link href="/properties">
              <p>You have 4 properties to view</p>
            </Link>
            <Link href="/">Return to homepage</Link>
            <div>
              <Link href="/user-info">Your details</Link>
            </div>
          </div>
        </HeroComponent>
      </div>
    </>
  );
}
