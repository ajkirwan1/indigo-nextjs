/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: true,
  // logger: {
  //   error(code, ...message) {
  //     log.error(code, message)
  //   },
  //   warn(code, ...message) {
  //     log.warn(code, message)
  //   },
  //   debug(code, ...message) {
  //     log.debug(code, message)
  //   },
  // },
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
});
