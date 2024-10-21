/** @format */

import { RegisterAction } from "@/server/actions/register";
import { validateRequest } from "@/auth/lucia";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import RegisterForm from "@/components/forms/register-form";
import classes from "./page.module.css";
import heroImage from "/public/images/authbackground.jpg";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function RegisterPage() {
  const { user } = await validateRequest();
  if (user && (user.properyAccess == 0 || user.consultingAccess == 0)) {
    // redirect("/register/pending-auth")
    null;
  }

  return (
    <>
      <div className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            priority
            alt="alt"
            // fill
            src={heroImage}
            className={classes.imageHero}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={classes.formContainerOuterWrapper}>
          <Header className={classes.heroHeader}></Header>
          <div className={classes.formcontainer}>
            <RegisterForm action={RegisterAction}></RegisterForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
