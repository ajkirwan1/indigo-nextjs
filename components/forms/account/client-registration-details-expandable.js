/** @format */
import ClientRegistrationDetailsForm from "@/components/forms/account/client-registration-details-form";
import { UpdateUserAccountRegisrationInfo } from "@/server/actions/db/account-registration-update";

export default function ClientRegistrationDetailsExpandable({ id, result }) {

  return (
    <>
      <ClientRegistrationDetailsForm
          id={id}
          clientInfo={result}
          action={UpdateUserAccountRegisrationInfo}
        />
    </>
  );
}
