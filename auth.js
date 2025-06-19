/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize: async (existingUser) => {
        return existingUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, account, profile, user, session }) {
      if (user) {
        token.id = user.id
        token.userName = user.userName;
        if (user.userType == "admin") {
          token.role = "admin";
        } else token.role = "user";
      }
      return token;
    },
    async session({ token, user, session, newSession, trigger }) {
      session.user.userName = token.userName;
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
    async redirect({ url, baseUrl}) {
      return "/login/redirect";
    },
  }
});
