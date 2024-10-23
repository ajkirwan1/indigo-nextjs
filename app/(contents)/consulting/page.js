/** @format */
import { redirect } from "next/navigation";
import withAuthentication from "@/components/withAuthentication";
import { validateRequest } from "@/auth/lucia";

async function ConsultingPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return (
    <>
      <h1>Properties page</h1>
    </>
  );
}

export default withAuthentication(ConsultingPage);
