/** @format */

import Link from "next/link";

import { validateRequest } from "@/lib/auth";
import Footer from "@/components/ui/footer";
import classes from "./page.module.css";
import { LoginForm } from "@/components/login-form";
import { login } from "@/server/actions/login";
import { Logout } from "@/server/actions/logout";

export default async function Page() {
  // const { user } = await validateRequest();
  // if (user) {
  //   return redirect("/");
  // }
  return (
    <>
      <div className={classes.hero}>
        <div className={classes.formcontainer}>
          {/* <img
            className={classes.logoIndigo}
            src="../../../public/logoindigo.png"
          ></img> */}
          <LoginForm action={login} />
          <Link href="/signup">Create an account</Link>
          <div>
            <form action={Logout}>
              <button>Sign out</button>
            </form>
          </div>
          <h1>EXCLUSIVE ACCESS</h1>
          <h2>User ID</h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
