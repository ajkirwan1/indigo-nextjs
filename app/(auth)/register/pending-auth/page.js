/** @format */

import classes from "./page.module.css";
import HeroComponent from "@/components/hero/hero-component";
import heroImage from "/public/images/croppednight.jpg";
import Link from "next/link";

export default function RegisterPage() {

  return (
    <>
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
          <h1>Success!</h1>
            <h2>Thank you for registering with Indigo</h2>
            <p>
            Your request has been received and is being processed. We will contact you shortly.
            </p>
            <Link href="/">Return to homepage</Link>
          </div>
        </HeroComponent>
      </div>
    </>
  );
}
