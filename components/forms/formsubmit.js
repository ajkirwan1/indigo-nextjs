/** @format */

"use client";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import SubmitButton from "../ui/buttons/submit-button";
import PendingButton from "../ui/buttons/pending-button";

export default function FormSubmit({ handleLoading }) {
  const status = useFormStatus();
  // const [loading, handleLoading] = useState(false);

  // if (status.pending == true) {
  //   handleLoading(true);
  // } else {
  //   handleLoading(false);
  // }
  return (
    <>
      {status.pending ? (
        <PendingButton>PENDING.....</PendingButton>
      ) : (
        <SubmitButton>SUBMIT</SubmitButton>
      )}
    </>
  );
}
