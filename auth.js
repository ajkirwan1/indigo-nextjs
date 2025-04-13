/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
  },
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
      // console.log(user, " jwt USER")
      // console.log(session, "jwt SESSION")
      // console.log(token, "jwt token")
      return token;
    },
    async session({ token, user, session, newSession, trigger }) {
      // if (session?.user) {
      //   console.log(token, "KSAKSAKS")
      //   session.user = token.user;
      // } 
      // session.user.role = token.role;
      return session;
    },
    async redirect() {
      return "/admin"
    }
  },

});
