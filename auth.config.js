export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/logout'
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET, // Use NEXTAUTH_SECRET here
  providers: [],
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production'
        ? '__Secure-next-auth.session-token'
        : 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
};
