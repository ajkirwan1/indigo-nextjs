/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import db from "./modules/db";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        const { username, password } = credentials;

        let errors = [];
        console.log(credentials);

        const existingUser = await db.user.findFirst({
          where: { username: username },
        });
        if (!existingUser) {
          throw new Error("USE DOES NOT EXIST", { cause: {message: "ERROROR"} });
        }
        if (!existingUser) {
          errors.push({ errorType: "username", message: "Invalid username" });
          return { errors, errorMessage: "", submitted: false };
        }
        const userpasswords = await db.password.findFirst({
          where: { userId: existingUser.id },
        });
        // return user;
      },
    }),
  ],
});
