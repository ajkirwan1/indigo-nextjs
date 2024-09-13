/** @format */
import { validateRequest } from "@/lib/auth";

export default async function ConsultingPage() {
  const { user } = await validateRequest();
  // if (user.consultingAccess !== 1) {
  //   return redirect("/unauthorised");
  // }
  console.log("ACCESS", user?.consultingAccess);

  function NoAccess() {
    return (
      <>
        <h1>You dont have access</h1>
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
      {user?.consultingAccess ? <Access /> : <NoAccess />}
    </>
  );
}
