/** @format */

"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormSubmit from "./formsubmit";
import classes from "./admin-submit-form.module.css";

function SubmitContainer({ handle }) {

  return (
    <div className={classes.darkBG}>
      <div className={classes.centered}>
        <h1>Confirm submission</h1>
        <FormSubmit />
        <button onClick={handle}>Decline</button>
      </div>
    </div>
  );
}

export default function AdminSubmitForm({ action, id, func }) {
  const [state, formAction] = useFormState(action, { id });
  const [confirm, setConfirm] = useState(false);

  const handleClick = () => {
    setConfirm((val) => !val);
  };

  return (
    <div>
      <form className={classes.loginForm} action={formAction}>
        <label htmlFor="consulting">Grant consulting access</label>
        <input name="consulting" type="checkbox" />
        <label htmlFor="properties">Grant consulting access</label>
        <input name="properties" type="checkbox" />
        {confirm == true ? <SubmitContainer handle={handleClick}/> : null}
        {/* <FormSubmit /> */}
      </form>
      <button onClick={handleClick}>Submitttty</button>
    </div>
  );
}
