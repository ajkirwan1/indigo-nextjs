/** @format */

"use server";
import nodemailer from "nodemailer";
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

export async function sendNewsletterRequest({ email }) {
  try {
    const isVerified = await transporter.verify();
    
    const info = await transporter.sendMail({
      from: email,
      to: SITE_MAIL_RECIEVER,
      subject: "New news letter subscription",
      text: `You received a new news-letter request from :\n\nEmail: ${email}`,
    });

    await transporter.sendMail({
      from: SITE_MAIL_RECIEVER,
      to: email,
      subject: "Thank you for your subscription",
      text: `Hi ${email},\n\nThank you for subsribing to our news letter!\n\nBest,\nIndigo Consulting`,
    });

    return info;
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return { message: "An error occured sending your email" };
  }
}
