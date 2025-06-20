/** @format */
"use client";
import { useState } from "react";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";
import { UpdateUserAccountRegisrationInfo } from "@/server/actions/db/account-registration-update";
import DropDownExpandable from "@/components/expandables/drop-down-expandable";

export default function ClientAccountPersonalDetailsExpandable({ id, result }) {
  const [expandableOpen, setExpandableOpen] = useState(false);

  return (
    <>
      {/* <DropDownExpandable
        expandableOpen={expandableOpen}
        setExpandableOpen={setExpandableOpen}
      >
        Personal details
      </DropDownExpandable>

      {expandableOpen ? (
        <ClientPersonalDetailsForm
          username={result.userName}
          firstname={result.name}
          email={result.email}
          phonenumber={result.phoneNumber}
          id={id}
        />
      ) : null} */}
      <h2>Personal Details</h2>
      <ClientPersonalDetailsForm
          username={result.userName}
          firstname={result.name}
          email={result.email}
          phonenumber={result.phoneNumber}
          id={id}
        />
    </>
  );
}
