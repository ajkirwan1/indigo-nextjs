/** @format */
import LoginForm from "@/components/forms/login-form";
import HeroComponent from "@/components/hero/hero-component";
import heroImage from "/public/images/croppednight.jpg";
import classes from "./page.module.css";

export default async function LoginPage() {

  let redirection;

  return (
    <>
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            <LoginForm redirection={redirection}></LoginForm>
          </div>
        </HeroComponent>
      </div>
    </>
  );
}
