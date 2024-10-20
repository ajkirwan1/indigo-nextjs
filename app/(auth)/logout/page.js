/** @format */

import { validateRequest } from "@/auth/lucia";
import { Logout } from "@/server/actions/logout";
import LogoutForm from "@/components/forms/logout-form";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import classes from "./page.module.css";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  const {user}= await validateRequest();

  if (!user)
  {
    redirect("/login");
  }

  return (
    <>
      <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
          <Header className={classes.heroHeader}></Header>
          <div className={classes.formcontainer}>
            <LogoutForm action={Logout}></LogoutForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
