/** @format */
// "use client";

import { validateRequest } from "@/lib/auth";
import Link from "next/link";
import { cookies } from "next/headers";
export default async function ConsultingPage() {
  const { user } = await validateRequest();
  // const pathname = usePathname();
  // if (user.consultingAccess !== 1) {
  //   return redirect("/unauthorised");
  // }
  // console.log("ACCESS", user?.consultingAccess);
  // console.log(pathname);

  // const cookieStore = cookies()
  // const path = cookieStore.set

  function NotLoggedIn() {
    return (
      <>
        <h1>You dont have access</h1>
        <p>To access this page you need to login and have privilged access</p>
        <Link href="/login">Login</Link>
      </>
    );
  }

  function NoAccess() {
    return (
      <>
        <h1>
          Although you are logged in, you are not authorised to view this page
        </h1>
        <p>Please click the link below to request access</p>
        <Link href="/consulting/request-access">Request Access</Link>
      </>
    );
  }

  function Access() {
    return (
      <>
        <h1>You have access</h1>
      </>
    );
  }

  return (
    <>
      <h1>Consulting page</h1>
      {!user ? (
        <NotLoggedIn />
      ) : user?.consultingAccess ? (
        <Access />
      ) : (
        <NoAccess />
      )}
    </>
  );
}
