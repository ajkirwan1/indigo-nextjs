/** @format */

"use client";
import { useFormStatus } from "react-dom";
import SubmitButton from "../ui/buttons/submit-button";
import { Spinner } from "@nextui-org/spinner";
import { commonColors } from "@nextui-org/react";
import classes from "./formsubmit.module.css";

export default function FormSubmit({ disabled }) {
  const status = useFormStatus();
  return (
    <>
      {status.pending ? (
        <div className={classes.spinnerWrapper}>
          <Spinner
            classNames={{
              circle1: `border-2 border-b-rose-950`,
              circle2: "border-2 border-b-rose-950",
            }}
            size="lg"
          />
        </div>
      ) : (
        <SubmitButton disabled={disabled}>Submit</SubmitButton>
      )}
    </>
  );
}
