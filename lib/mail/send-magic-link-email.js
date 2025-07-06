/** @format */

"use server";
import nodemailer from "nodemailer";
import transporter from "@/utils/mail-transporter/mail-transporter";

export async function sendMagicLinkEmail(email, magicLink) {

    
  try {
    const isVerified = await transporter.verify();

    await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
      to: email,
      subject: "You’ve been invited!",
      html: `<p>Click the link to register: <a href="${magicLink}">${magicLink}</a></p>`,
    });

    // return info;
  } catch (error) {
    console.error(
      "Something Went Wrong",
      error
    );
    return { message: "An error occured sending your email" };
  }
}
