/** @format */
import HeroComponent from "@/components/hero/hero-component";
import classes from "./page.module.css";
import heroImage from "/public/images/croppednight.jpg";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function AccountDeleteSuccess(props) {
  const token = props?.searchParams?.token;
  const secret = process.env.JWT_DELETE_ACCOUNT_SECRET;

  if (!token || !secret) {
    return redirect("/");
  }

  try {
    const payload = jwt.verify(token, secret);

    if (payload?.type !== "account-deleted") {
      return redirect("/");
    }

    return (
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            ✅ Your account has been successfully deleted.
          </div>
        </HeroComponent>
      </div>
    );
  } catch (err) {
    console.error("Invalid or expired token:", err);
    return redirect("/");
  }
}
