/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import ErrorComponent from "@/components/fallbacks/Error/error-component";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);


  const errorMessage = {message: "An error occured while fetching the news list"}

  return (
    <>
      <ErrorComponent error={errorMessage} reset={reset} />
    </>
  );
}
