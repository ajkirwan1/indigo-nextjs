/** @format */
"use client";
import classes from "./page.module.css";
import ContactForm from "@/components/forms/contact-form";
import { ContactUs } from "@/server/actions/contact";
import { useState } from "react";
import Image from "next/image";
import phoneIcon from "/public/images/icons/phoneblue.png";
import contactIcon from "/public/images/icons/envelope.png";

export default function ContactUsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen((val) => !val);
  };

  return (
    <>
      <div
        className={
          !modalOpen
            ? `${classes.ModalBackdropWrapper}`
            : `${classes.ModalBackdropWrapperOpen}`
        }
        onClick={handleModalToggle}
      >
        <div className={classes.form}>
          <div className={classes.formcontainer}>
            <ContactForm action={ContactUs}></ContactForm>
          </div>
        </div>
      </div>

      <div>
        <title>INDIGO CONSULTING CONTACT US PAGE</title>
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
          <div className={`${classes.mobileWrapper}`}>
            <div
              className={classes.mobileMessageContainer}
              onClick={handleModalToggle}
            >
              <h2>Message</h2>
              <Image
                alt="An icon showing a phone"
                src={contactIcon}
                className={classes.phoneIcon}
              />
            </div>
            <div
              className={classes.mobileMessageContainer}
              onClick={handleModalToggle}
            >
              <h2>Let&apos;s talk</h2>
              <Image
                alt="An icon showing a phone"
                src={phoneIcon}
                className={classes.phoneIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
