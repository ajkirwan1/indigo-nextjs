/** @format */

import withAuthentication from "@/components/withAuthentication";
import { validateRequest } from "@/lib/auth";

async function PropertiesPage() {
  const { user } = await validateRequest();
  console.log(user)
  return (
    <>
      <h1>Properties page</h1>
    </>
  );
}

export default withAuthentication(PropertiesPage);
