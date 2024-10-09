/** @format */

import Link from "next/link";

import { db } from "@/lib/db";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Form } from "@/lib/form";
import ModalBackdrop from "@/components/modal-backdrop";
import classes from "./page.module.css";
// import "../../../app/globals.css";
export default async function Page() {
  // const { user } = await validateRequest();
  // if (user) {
  //   return redirect("/");
  // }
  return (
    <>
      <ModalBackdrop></ModalBackdrop>

      <dialog className="modal" open>
        {/* <div className={classes.fullScreenImage}> */}
        <div className={classes.formcontainer}>
          <img
            className={classes.logoIndigo}
            src="../../../public/logoindigo.png"
          ></img>
          <Form action={login}>
            <label htmlFor="username">Username</label>
            <input name="username" id="username" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <br />
            <button>Continue</button>
          </Form>
          <Link href="/signup">Create an account</Link>
          <div>
            <form action={logout}>
              <button>Sign out</button>
            </form>
          </div>
          <h1>EXCLUSIVE ACCESS</h1>
          <h2>User ID</h2>
        </div>
        {/* </div> */}
      </dialog>

      {/* <Footer></Footer> */}
    </>
  );
}

async function login(_, formData) {
  "use server";
  const username = formData.get("username");
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }
  const password = formData.get("password");
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: "Invalid password",
    };
  }

  const existingUser = db
    .prepare("SELECT * FROM user WHERE username = ?")
    .get(username);
  console.log(existingUser);
  if (!existingUser) {
    return {
      error: "Incorrect username or password",
    };
  }

  const validPassword = await verify(existingUser.password_hash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  if (!validPassword) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is non-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling, 2FA, etc.
    // If usernames are public, you can outright tell the user that the username is invalid.
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}

async function logout() {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}
