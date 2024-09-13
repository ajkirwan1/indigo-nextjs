/** @format */

"use client";

import { useFormState } from "react-dom";

function Password() {
  return (
    <>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
    </>
  );
}

export function LoginForm({ action }) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });

  return (
    <form action={formAction}>
      <label htmlFor="username">Username</label>
      <input name="username" id="username" />
      <button>Continue</button>
      {state.existingUser ? <Password /> : null}
      <p>{state.error}</p>
    </form>
  );
}
