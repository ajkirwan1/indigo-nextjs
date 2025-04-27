export const authConfig = {
    pages: {
      signIn: '/login',
      signOut: '/logout'
    },
    session: {strategy : 'jwt'},
    providers: [],
    secret: process.env.AUTH_SECRET,
  }