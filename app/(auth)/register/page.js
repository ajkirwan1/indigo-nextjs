/** @format */

import { RegisterAction } from "@/server/actions/forms/register";
import { validateRequest } from "@/auth/lucia";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import RegisterForm from "@/components/forms/register-form";
import classes from "./page.module.css";
import { redirect } from "next/navigation";


export default async function RegisterPage() {
  const { user } = await validateRequest();
  if (user && (user.properyAccess == 0 || user.consultingAccess == 0))
  {
    // redirect("/register/pending-auth")
    null
  }
  
  return (
    <>
  <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
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
