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
    // authorized({ auth, request }) {
    //   console.log(auth)
    //   console.log(request)
    //   return true;
    // },
    async jwt({ token, trigger, account, profile, user, session }) {
      if (user) {
        token.name = user.firstname;
        if (user.adminaccess == 2) {
          token.role = "admin";
        } else token.role = "user";
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
    async redirect({ url, baseUrl}) {
      return "/login/redirect";
    },
  }
});
