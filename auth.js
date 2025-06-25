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
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.userName = token.userName;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log(url, "URLSLSKSKSKD")
      // If the URL contains "delete", redirect somewhere else
      if (url.includes("account-delete-success")) {
        console.log("SUCCEESSSSSSSSSSS")
        return url; // redirect here if 'delete' in URL
      }
      // Otherwise, redirect to default
      return "/login/redirect";
    }
    
  }
});
