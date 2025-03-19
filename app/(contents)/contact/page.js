/** @format */
// "use client";

import classes from "./page.module.css";
import ContactForm from "@/components/forms/contact-form";
import { ContactUs } from "@/server/actions/contact";
import Image from "next/image";
import phoneIcon from "/public/images/icons/phoneblue.png";

export const metadata = {
  title: "Contact Indigo Consulting | Get in Touch for Expert Consulting",
  keywords: [
    "contact Indigo Consulting",
    "consulting contact",
    "real estate consulting contact",
    "Greece consulting",
    "luxury development contact",
    "contact us Greece",
    "real estate services Greece",
    "Golden Visa contact",
    "email Indigo Consulting",
    "phone number Indigo Consulting",
  ],
  description:
    "Contact Indigo Consulting to discuss your real estate development, consulting, and Golden Visa needs. Find our contact details, including email and phone number, for direct inquiries and expert advice.",
};


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
        <div className={`${classes.wrapper} ${classes.wrapperViewport}`}>
          <div className={classes.form}>
            <div className={classes.formcontainer}>
              <ContactForm action={ContactUs}></ContactForm>
            </div>
          </div>
          <span></span>
          <div className={classes.letsTalk}>
            <h2>LET&apos;S TALK</h2>
            <Image
              alt="An icon showing a phone"
              src={phoneIcon}
              className={classes.phoneIcon}
            />
            <div className={classes.phoneAndEmail}>
              <h3>PHONE: +30 697 333 5888</h3>
              <h3>E-MAIL: EP@INDIGO-CONSULTING.GR</h3>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.formMobile}>
            <div className={classes.letsTalk}>
              <h2>LET&apos;S TALK</h2>
              <Image
                alt="An icon showing a phone"
                src={phoneIcon}
                className={classes.phoneIcon}
              />
              <div className={classes.phoneAndEmail}>
                <h3>PHONE: +30 697 333 5888</h3>
                <h3>E-MAIL: EP@INDIGO-CONSULTING.GR</h3>
              </div>
            </div>
            <div className={classes.formcontainer}>
              <ContactForm action={ContactUs}></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
