/** @format */
import { Login } from "@/server/actions/login";
import { validateRequest } from "@/auth/lucia"
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import LoginForm from "@/components/forms/login-form";
import classes from "./page.module.css";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Image from "next/image";
import heroImage from "/public/images/authbackground.jpg";

export default async function LoginPage() {
  const headerList = headers();
  const pathname = headerList.get("x-search-params");
 
  let redirection;

  if (pathname.includes('properties')) {
    redirection = 'properties'
  }
  const {user}= await validateRequest();

  if (user)
  {
    redirect("/logout");
  }

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
            <LoginForm redirection={redirection} action={Login}></LoginForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
