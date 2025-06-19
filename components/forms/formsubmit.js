/** @format */

"use client";
import { useFormStatus } from "react-dom";
import SubmitButton from "../ui/buttons/submit-button";
import { Spinner } from "@nextui-org/spinner";
import classes from "./formsubmit.module.css";

export default function FormSubmit({ disabled, showSpinner = true }) {
  const status = useFormStatus();
  return (
    <>
      {status.pending && showSpinner ? (
        <div className={classes.spinnerWrapper}>
          <Spinner size="lg" />
        </div>
      ) : (
        <SubmitButton disabled={disabled}>Submit</SubmitButton>
      )}
    </>
  );
}
