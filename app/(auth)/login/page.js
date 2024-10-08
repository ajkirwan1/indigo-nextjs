/** @format */
import { Login } from "@/server/actions/login";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import LoginForm from "@/components/forms/login-form";
import classes from "./page.module.css";

export default function LoginPage() {

  return (
    <>
      <div className={classes.registerPageContainer}>
        <div className={classes.hero}>
          <Header className={classes.header}></Header>
          <div className={classes.formcontainer}>
          <LoginForm action={Login}></LoginForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
