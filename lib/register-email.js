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
  // redirect("/register/pending-auth");
  try {
    throw Error
    const {
      email,
      companyName,
      phoneNumber,
      buyerType,
      location,
      purchaseTimeline,
      investmentInterest,
      investmentRange,
      previousInvestment,
    } = data;
    //     const isVerified = await transporter.verify();

    const Registration = await transporter.sendMail({
      from: email,
      to: SITE_MAIL_RECIEVER,
      subject: "Customer Registration",
      text: `
        You received a new customer registration request:
        Customer Email: ${email}
        Company Name: ${companyName}
        Phone Number: ${phoneNumber}
        Buyer Type: ${buyerType}
        Location: ${location}
        Purchase Timeline: ${purchaseTimeline}
        Investment Interest: ${investmentInterest}
        Investment Range: ${investmentRange}
        Previous Investment: ${previousInvestment}`,
    });

    await transporter.sendMail({
      from: SITE_MAIL_RECIEVER,
      to: email,
      subject: "Registration with Indigo Consulting",
      text: `Hi ${email},\n\nThank you for registering with Indigo!\n\nBest,\nIndigo Consulting,\nYou response:
        Customer Email: ${email}
        Company Name: ${companyName}
        Phone Number: ${phoneNumber}
        Buyer Type: ${buyerType}
        Location: ${location}
        Purchase Timeline: ${purchaseTimeline}
        Investment Interest: ${investmentInterest}
        Investment Range: ${investmentRange}
        Previous Investment: ${previousInvestment}`,
    });
    return info;
  } catch (error) {
    console.error(
      "Something Went Wrong",
      error
    );
    return { emailSubmissionError: "An error occured sending your email" };
  }
}
