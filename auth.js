/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text ", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // let user = null;
        let user = {}
        console.log(credentials, "CREDS")
        user.username = credentials.username
        user.password = credentials.password

        // return user object with their profile data
        return user;
      },
    }),
  ],
  // callbacks: {
  //   authorized({ auth, request }) {
  //     console.log(auth)
  //     console.log(request)
  //     return true;
  //   },
  // },

});
