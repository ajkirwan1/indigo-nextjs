/** @format */

"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
export default function AdminSubmitForm({ action, id }) {
  const [state, formAction] = useFormState(action, { id });
    
  console.log(state);
  return (
    <>
      <form className={classes.loginForm} action={formAction}>
        <label htmlFor="consulting">Grant consulting access</label>
        <input name="consulting" type="checkbox" />
        <label htmlFor="properties">Grant consulting access</label>
        <input name="properties" type="checkbox" />
        <FormSubmit />
      </form>
    </>
  );
}
