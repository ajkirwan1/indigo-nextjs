/** @format */

"use client";
import { useFormStatus } from "react-dom";
import SubmitButton from "../ui/buttons/submit-button";
import PendingButton from "../ui/buttons/pending-button";
import { Spinner } from "@nextui-org/spinner";

export default function FormSubmit({ disabled }) {
  const status = useFormStatus();
  return (
    <>
      {status.pending ? (
        // <PendingButton>Please wait....</PendingButton>
        <Spinner />
      ) : (
        <SubmitButton disabled={disabled}>Submit</SubmitButton>
      )}
    </>
  );
}
