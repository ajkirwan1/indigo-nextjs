/** @format */

import { validateRequest } from "@/lib/auth";
import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import classes from "./page.module.css";
import { redirect } from "next/navigation";

export default async function LoginPage() {
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
            Logout
          {/* <LoginForm action={Login}></LoginForm> */}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

// export default async function LogOutPage() {
//     const response = await fetch('http://localhost:3000/api/logout')
// }