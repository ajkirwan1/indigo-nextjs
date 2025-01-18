/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";
import db from "./modules/db";
import { LegacyScrypt } from "lucia";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // credentials: {
      //   username: {},
      //   password: {},
      // },

      async authorize(credentials) {
        const { username, password } = credentials;

        let errors = [];
        console.log(credentials);

        const existingUser = await db.user.findFirst({
          where: { username: username },
        });
        if (!existingUser) {
          throw new Error("User does not exist", {
            cause: { message: "User not found error" },
          });
        }
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
        // console.log(token, "token")
        // console.log(user, "user")
        token.name = "John"
        console.log(token, "token")
        console.log(trigger, "trigger")
        console.log(account, "account")
        console.log(profile, "profile")
        console.log(session, "session")
        if (user.adminaccess == 2) {
          token.role = "admin"
        } else (
          token.role = "client"
        )
token.role = "admin"
      }
      return token;
    },
    async session({ token, user, session, newSession, trigger }) {
      // if (session?.user) {
      //   console.log(token, "KSAKSAKS")
      //   session.user = token.user;
      // }
      console.log(session, "KDAKDKLDK:LD:L")
      session.user.role = token.role
      return session
    },
    async redirect({ url, baseUrl }) {
      return ("http://localhost:3000/contact")
    }
  },
});
