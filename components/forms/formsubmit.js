"use client";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "../ui/buttons/submit-button";
export default function FormSubmit() {
  const status = useFormStatus();

  console.log(status);

  if (status.pending) {
    return <p>.....pending</p>;
  }

  return (
    <>
      
      <SubmitButton>Submit</SubmitButton>
    </>
  );
}
