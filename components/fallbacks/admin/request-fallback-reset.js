/** @format */
"use client";
import Button from "@/components/ui/button";
import classes from "./request-fallback-reset.module.css"
import { useRouter } from "next/navigation";

export default function RequestFallbackReset({}) {
  const router = useRouter();
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className={classes.failureWrapper}>
      <p>Request failed</p>
      <div className="submit-button-container">
        <Button onClick={handleClick}>Try again</Button>
      </div>
    </div>
  );
}
