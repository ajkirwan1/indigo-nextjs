import HeroComponent from "@/components/hero/hero-component";
import heroImage from "/public/images/croppednight.jpg";
import classes from "./page.module.css";
import PasswordResetRequestResetForm from "@/components/forms/password-reset/password-reset-request";
import { redirect } from "next/navigation";

export default function PasswordResetConfirmPage({ searchParams }) {
  const token = typeof searchParams?.token === "string" ? searchParams.token : null;

  if (!token) {
    redirect("/"); // redirect server-side
  }

  return (
    <div className={classes.pageWrapper}>
      <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
        <div className={classes.formcontainer}>
          <PasswordResetRequestResetForm token={token} />
        </div>
      </HeroComponent>
    </div>
  );
}
