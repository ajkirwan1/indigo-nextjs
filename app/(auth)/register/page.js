/** @format */

import { RegisterAction } from "@/server/actions/forms/register";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import RegisterForm from "@/components/forms/register-form";
import Image from "next/image";
import classes from "./page.module.css";


export default function RegisterPage() {

  return (
    <>
  <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
        <Header className={classes.header}></Header>
          <div className={classes.formcontainer}>
         <RegisterForm action={RegisterAction}></RegisterForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
