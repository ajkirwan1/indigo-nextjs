/** @format */
import { redirect } from "next/navigation";
import withAuthentication from "@/components/withAuthentication";
import { validateRequest } from "@/lib/auth";

async function PropertiesPage() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/login");
  }
  return (
    <>
      <h1>Properties page</h1>
    </>
  );
}

export default withAuthentication(PropertiesPage);
