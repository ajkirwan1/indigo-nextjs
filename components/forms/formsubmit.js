/** @format */

"use client";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "../ui/buttons/submit-button";
import { PendingButton } from "../ui/buttons/pending-button";
import { ShimmerButton } from "shimmer-effects-react";
import ShimmerDiv from "shimmer-effects-react";
import classes from "./formsubmit.module.css";
export default function FormSubmit({ loading }) {
  const status = useFormStatus();

  return (
    <>
      {status.pending ? (
        <PendingButton>
          Pending.....
        </PendingButton>
      ) : (
        <SubmitButton>Submit</SubmitButton>
      )}
    </>
  );
}
