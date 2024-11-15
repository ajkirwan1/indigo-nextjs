/** @format */
import classes from "./page.module.css";
import ContactForm from "@/components/forms/contact-form";
import { ContactUs } from "@/server/actions/contact";
import Image from "next/image";
import phoneIcon from "/public/images/icons/phone.png";

export default function ContactUsPage() {
  return (
    <>
      <div className={classes.pageWrapper}>
        <p>
          Feel free to fill out the contact form below and one of our team
          members will get back to you as soon as possible. Alternatively, you
          can find our contact details listed below if you prefer to reach out
          to us directly.
        </p>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <div className={classes.formcontainer}>
            <ContactForm action={ContactUs}></ContactForm>
          </div>
        </div>
        <span></span>
        <div className={classes.letsTalk}>
          <h1>LET&apos;S TALK</h1>
          <Image alt="icon" src={phoneIcon} className={classes.phoneIcon} />
          <div className={classes.phoneAndEmail}>
            <h1>T:+30 210 12 34 567</h1>
            <h1>E: INFO@INDIGO.GR</h1>
          </div>
        </div>
      </div>
    </>
  );
}
