/** @format */

import classes from "./page.module.css";
import heroImage from "/public/images/croppednight.jpg";
import HeroComponent from "@/components/hero/hero-component";
import RegisterPageComponent from "@/components/pages/register/register-page-component";

export const metadata = {
  title: "Register",
  keywords: ["Indigo", "Consulting", "Development", "Luxury", "Redevelopment", "Golden visa", "Market Analysis", "Register", "Sign-up"], 
  description: "Indigo consulting regsitration page",
};


export default async function RegisterPage() {
  // const { user } = await validateRequest();
  // if (user && (user.properyAccess == 0 || user.consultingAccess == 0)) {
  //   // redirect("/register/pending-auth")
  //   null;
  // }

  return (
    <div className={classes.pageWrapper}>
      <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <RegisterPageComponent />
      </HeroComponent>
    </div>
  );
}
