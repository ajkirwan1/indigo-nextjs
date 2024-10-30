/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import classes from "./page.module.css";
import { validateRequest } from "@/auth/lucia";
import heroImage from "/public/images/authbackground.jpg";

export default async function RegisterPage() {
  const { user, session } = await validateRequest();

  if (!user) {
    redirect("/login");
  }
  const userName = user.username;
  const userEmail = user.email;

  console.log(session);
  console.log(user);

  return (
    <>
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            priority
            alt="alt"
            src={heroImage}
            className={classes.imageHero}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={classes.formContainerOuterWrapper}>
          <Header className={classes.heroHeader}></Header>
          <div className={classes.formcontainer}>
            <h1>Hi {userName}</h1>
            <h1>
              Your request to Indigo has been received, and we will contact you
              shortly via your email {userEmail}
            </h1>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
