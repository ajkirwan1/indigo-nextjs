/** @format */

"use server";
import transporter from "@/utils/mail-transporter/mail-transporter";

export async function sendMail({ email, firstName, text }) {
  try {
    const isVerified = await transporter.verify();
    
    const info = await transporter.sendMail({
      from: email,
      to: process.env.SITE_MAIL_RECEIVER,
      subject: "New Form Submission",
      text: `You received a new form submission:\n\nName: ${firstName}\nEmail: ${email}\nMessage: ${text}`,
    });

    await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
      to: email,
      subject: "Thank You for Your Submission",
      text: `Hi ${firstName},\n\nThank you for contacting us! We'll get back to you soon.\n\nBest,\nYour Team`,
    });

    return info;
  } catch (error) {
    console.error(
      "Something Went Wrong",
      error
    );
    return { message: "An error occured sending your email" };
  }
}
