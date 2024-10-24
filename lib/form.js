/** @format */

"use client";

import { useFormState } from "react-dom";

export default function Form({ children, action }) {
  // const [user, setUser] = useState();
  const [state, formAction] = useFormState(action, {
    error: null,
  });

  return (
    <form userState={state} action={formAction}>
      {children}
      <p>{state.error}</p>
    </form>
  );
}
