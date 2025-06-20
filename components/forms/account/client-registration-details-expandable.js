/** @format */
"use client";
import { useState } from "react";
import ClientRegistrationDetailsForm from "@/components/forms/account/client-registration-details-form";
import { UpdateUserAccountRegisrationInfo } from "@/server/actions/db/account-registration-update";
import DropDownExpandable from "@/components/expandables/drop-down-expandable";

export default function ClientRegistrationDetailsExpandable({ id, result }) {
  const [expandableOpen, setExpandableOpen] = useState(false);

  return (
    <>
      {/* <DropDownExpandable
        expandableOpen={expandableOpen}
        setExpandableOpen={setExpandableOpen}
      >
        Registration information
      </DropDownExpandable>
      {expandableOpen ? (
        <ClientRegistrationDetailsForm
          id={id}
          clientInfo={result}
          action={UpdateUserAccountRegisrationInfo}
        />
      ) : null} */}
      <h2>Registration Information</h2>
      <ClientRegistrationDetailsForm
          id={id}
          clientInfo={result}
          action={UpdateUserAccountRegisrationInfo}
        />
    </>
  );
}
