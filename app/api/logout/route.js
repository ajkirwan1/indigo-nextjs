// /** @format */

// // app/api/logout/route.ts
// import { auth } from "@/auth/lucia";
// import * as context from "next/headers";

// export const POST = async (request) => {
//   const authRequest = auth.handleRequest(request.method, context);
//   // check if user is authenticated
//   const session = await authRequest.validate();
//   if (!session) {
//     return new Response(null, {
//       status: 401,
//     });
//   }
//   // make sure to invalidate the current session!
//   await auth.invalidateSession(session.sessionId);
//   // delete session cookie
//   authRequest.setSession(null);
//   return new Response(null, {
//     status: 302,
//     headers: {
//       Location: "/login", // redirect to login page
//     },
//   });
// };



import { cookies } from 'next/headers'
 
export async function GET(request) {
  const cookieStore = cookies()
  const token = cookieStore.get('auth_session').name

  console.log(cookieStore.get('auth_session').name)
  console.log(cookieStore.get('auth_session').value)

  console.log(cookieStore.get('next-auth.callback-url').name)
  console.log(cookieStore.get('next-auth.callback-url').value)
 
  return new Response(token.name)
}