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
        console.log(existingUser, "USER");
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
    async jwt({ token, user }) {
      if (user) {
        token.adminaccess = user.adminaccess;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.adminaccess = token.adminaccess;
      }
    },
    async authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      return isAuthenticated;
    },
  },
});
