/** @format */

"use server";
import nodemailer from "nodemailer";
import { redirect } from "next/navigation";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  tls: {
    minVersion: "TLSv1.2", // Ensure TLS 1.2 is used
    rejectUnauthorized: false, // Set to true for better security
  },
});

export async function RegisterEmail(data) {

  try {
    const {
      email,
    } = data;
    //     const isVerified = await transporter.verify();

    const Registration = await transporter.sendMail({
      from: email,
      to: SITE_MAIL_RECIEVER,
      subject: "Customer Registration",
      text: `
        A client has deleted their account`,
    });

    await transporter.sendMail({
      from: SITE_MAIL_RECIEVER,
      to: email,
      subject: "Registration with Indigo Consulting",
      text: `Your account has been deleted`,
    });
    return info;
  } catch (error) {
    console.error("Something Went Wrong", error);
    return {
      emailSubmissionError:
        "We're sorry, but something went wrong dispatching your email. However, your details have been recieved, and we will contact you shortly.",
    };
  }
}
