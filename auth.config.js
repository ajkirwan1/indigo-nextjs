export const authConfig = {
    pages: {
      signIn: '/login',
      signOut: '/logout'
    },
    session: {
      strategy: "jwt",
      maxAge: 1800,
      updateAge: 900,
    },
  
    providers: [],
    secret: process.env.NEXTAUTH_SECRET,
  }