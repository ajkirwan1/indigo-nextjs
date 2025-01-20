/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
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
        const userpassword = await db.password.findFirst({
          where: { userId: existingUser.id },
        });

        const passwordMatch = await bcrypt.compare(password, userpassword.hashedPassword)

        if (!passwordMatch) {
          throw new Error("Password", {
            cause: { message: "Invalid password" },
          });
        }
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
    // async redirect({ url, baseUrl }) {
    //   return "http://localhost:3000/contact";
    // },
  },
});
