/** @format */
import classes from "./page.module.css";
import ContactForm from "@/components/forms/contact-form";
import { ContactUs } from "@/server/actions/contact";
import { motion } from "framer-motion";
import Image from "next/image";
import phoneIcon from "/public/images/icons/phoneblue.png";

export default function ContactUsPage() {
  return (
    <>
      <title>INDIGO CONSULTING CONTACT US PAGE</title>
      <div className={classes.header}>
        <h1>CONTACT US</h1>
      </div>
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
            <h1>PHONE: +30 697 333 5888</h1>
            <h1>E-MAIL: EP@INDIGO-CONSULTING.GR</h1>
          </div>
        </div>
      </div>
    </>
  );
}
