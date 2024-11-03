/** @format */

import { RegisterAction } from "@/server/actions/register";
import { validateRequest } from "@/auth/lucia";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import RegisterForm from "@/components/forms/register-form";
import classes from "./page.module.css";
import heroImage from "/public/images/croppednight.jpg";
import { redirect } from "next/navigation";
import Image from "next/image";
import HeroComponent from "@/components/hero/hero-component";

export default async function RegisterPage() {
  // const { user } = await validateRequest();
  // if (user && (user.properyAccess == 0 || user.consultingAccess == 0)) {
  //   // redirect("/register/pending-auth")
  //   null;
  // }

  return (
    <div className={classes.pageWrapper}>
      <HeroComponent heroImage={heroImage} altText="Alt text" header>
        <div className={classes.formcontainer}>
          <RegisterForm action={RegisterAction}></RegisterForm>
        </div>
      </HeroComponent>
      <Footer></Footer>
    </div>
  );
}
