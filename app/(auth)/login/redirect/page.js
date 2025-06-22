import { SessionProvider } from "next-auth/react";
import RedirectComponent from "@/components/redirect/redirect-component";

export default function RedirectPage() {

  return (
    <SessionProvider>
      <RedirectComponent />
    </SessionProvider>
  );
}
