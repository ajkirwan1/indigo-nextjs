/** @format */

"use client";
import { useFormStatus } from "react-dom";
import SubmitButton from "../ui/buttons/submit-button";
import { Spinner } from "@nextui-org/spinner";
import { commonColors } from "@nextui-org/react";
import classes from "./formsubmit.module.css"

console.log(commonColors);
export default function FormSubmit({ disabled }) {
  const status = useFormStatus();
  console.log(status);
  return (
    <>
      {status.pending ? (
        <div className={classes.spinnerWrapper}>
          <Spinner color={commonColors.red[900]} size="lg" />
        </div>
      ) : (
        <SubmitButton disabled={disabled}>Submit</SubmitButton>
      )}
    </>
  );
}
