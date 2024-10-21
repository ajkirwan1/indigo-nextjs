/** @format */
import classes from "./page.module.css";
import ContactForm from "@/components/forms/contact-form";
import { ContactUs } from "@/server/actions/contact";

export default function ProjectsPage() {
  return (
    <>
      <p>
        Feel free to fill out the contact form below and one of our team members
        will get back to you as soon as possible. Alternatively, you can find
        our contact details listed below if you prefer to reach out to us
        directly.
      </p>
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <div className={classes.formcontainer}>
            <ContactForm action={ContactUs}></ContactForm>
          </div>
        </div>
        <span></span>
        <div className={classes.letsTalk}>
          <h1>LET&apos;S TALK</h1>
          <h2>T:+30 210 12 34 567</h2>
          <h2>E: INFO@INDIGO.GR</h2>
        </div>
      </div>
    </>
  );
}
