/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import ErrorComponent from "@/components/fallbacks/Error/error-component";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);


  const errorMessage = {message: "The news item you are trying to find cannot be found at this time"}

  return (
    <>
      <ErrorComponent error={errorMessage} reset={reset} />
    </>
  );
}
