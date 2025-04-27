export const authConfig = {
    pages: {
      signIn: '/login',
      signOut: '/logout'
    },
    session: {strategy : 'jwt'},
    providers: [],
    secret: process.env.NEXTAUTH_SECRET,
  }