/** @format */

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import FormSubmit from "@/components/forms/formsubmit";
import Image from "next/image";
import classes from "./page.module.css";


export default function LoginPage({ params }) {

  return (
    <>
  <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
        <Header className={classes.header}></Header>
          <div className={classes.formcontainer}>
          <img
              className={classes.logoIndigo}
              src="./logoindigo.png"
              ></img>
              <h1>Login</h1>
            <form className={classes.loginForm}>
              <div className={classes.formItemContainer}>
                <label>User name:</label>
                <input
                  type="text"
                  name="userName"
                />
              </div>
              <div className={classes.formItemContainer}>
                <label>Password:</label>
                <input
                  type="text"
                  name="password"
                />
              </div>
              <div className={classes.submitButtonContainer}>
              <FormSubmit />
              </div>
            </form>            
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
