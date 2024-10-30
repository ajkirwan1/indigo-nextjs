/** @format */
import { Login } from "@/server/actions/login";
import { validateRequest } from "@/auth/lucia";
import Footer from "@/components/ui/footer";
import LoginForm from "@/components/forms/login-form";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import HeroComponent from "@/components/hero/hero-component";
import heroImage from "/public/images/authbackground.jpg";
import classes from "./page.module.css";

export default async function LoginPage() {
  const headerList = headers();
  const pathname = headerList.get("x-search-params");

  let redirection;

  if (pathname.includes("properties")) {
    redirection = "properties";
  }
  const { user } = await validateRequest();

  if (user) {
    redirect("/logout");
  }

  return (
    <>
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header>
          <LoginForm redirection={redirection} action={Login}></LoginForm>
        </HeroComponent>
      </div>
      <Footer></Footer>
    </>
  );
}
