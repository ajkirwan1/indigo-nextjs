/** @format */
"use client";
import { useRouter } from "next/router";
import { useSession } from "../contexts/session-context";
import { useEffect } from "react";

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const { user } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticating) {
        if (!user && router.pathname !== "/login") {
          router.push("/login");
        }
      }
    }, [user, isAuthenticating, router]);

    if (isAuthenticating) {
      return <>LOADING</>;
    }
    console.log("authentication component", user);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
