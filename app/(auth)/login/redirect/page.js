import { SessionProvider } from "next-auth/react";
import RedirectComponent from "@/components/redirect/redirect-component";
import { Suspense } from "react";

export default function RedirectPage() {

  return (
    <Suspense>
      <SessionProvider>
      <RedirectComponent />
    </SessionProvider>    
    </Suspense>

  );
}
