/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";
import db from "./modules/db";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials;

        const existingUser = await db.user.findFirst({
          where: { username: username },
        });
        if (!existingUser) {
          throw new Error("Username", {
            cause: { message: "User not found" },
          });
        }


        console.log("PASSED");
        // if (!existingUser) {
        //   errors.push({ errorType: "username", message: "Invalid username" });
        //   return { errors, errorMessage: "", submitted: false };
        // }
        // const userpassword = await db.password.findFirst({
        //   where: { userId: existingUser.id },
        // });

        // if (!userpassword) {
        //   throw new Error("Invalid password", { cause: {message: "Incorrect password"} });
        // }

        // console.log(userpassword)
        // const passwordMatch = bcrypt.compare(password, userpassword)

        // if (!passwordMatch) {
        //   throw new Error("Invalid password", { cause: {message: "Incorrect password"} });
        // }
        return existingUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, account, profile, user, session }) {
      if (user) {

        token.name = "John";

        if (user.adminaccess == 2) {
          token.role = "admin";
        } else token.role = "client";
        token.role = "admin";
      }
      return token;
    },
    async session({ token, user, session, newSession, trigger }) {
      // if (session?.user) {
      //   console.log(token, "KSAKSAKS")
      //   session.user = token.user;
      // }
      session.user.role = token.role;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return "http://localhost:3000/contact";
    },
  },
});
