/** @format */
import db from "@/modules/db";
import { redirect } from "next/navigation"; // Redirect helper
import HeroComponent from "@/components/hero/hero-component";
import classes from "./page.module.css"
import heroImage from "/public/images/croppednight.jpg";
import RegisterFormPage1 from "@/components/forms/register/page-1";

export default async function NewUserPage({ searchParams }) {
  const { token } = searchParams;

  if (!token) {
    redirect("/"); // Token is missing, redirect to error page
  }

  try {
    // Step 1: Check if the token exists and is valid
    const magicLinkRecord = await db.magicLinkToken.findUnique({
      where: { token },
    });

    // Step 2: If token is invalid (not found or expired/used), redirect to error page
    if (
      !magicLinkRecord ||
      magicLinkRecord.used ||
      magicLinkRecord.expiresAt < new Date()
    ) {
      redirect("/"); // Redirect to error page
    }

    // Step 3: If the token is valid, render the page
    return (
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            <RegisterFormPage1 magicLinkRecord={magicLinkRecord}/>
          </div>
        </HeroComponent>
      </div>
    );
  } catch (error) {
    console.error("Error validating token:", error);
    redirect("/"); // Redirect in case of any error
  }
}
