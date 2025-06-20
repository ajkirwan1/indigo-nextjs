/** @format */
"use client";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";

export default function ClientAccountPersonalDetailsExpandable({ id, result }) {

  return (
    <>
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
