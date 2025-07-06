/** @format */

"use server";
import transporter from "@/utils/mail-transporter/mail-transporter";

export async function sendNewsletterRequest({ email }) {
  console.log(email, "EMAIL NEWS LETTER")
  try {
    const isVerified = await transporter.verify();
    
    const info = await transporter.sendMail({
      from: email,
      to: process.env.SITE_MAIL_RECEIVER,
      subject: "New news letter subscription",
      text: `You received a new news-letter request from :\n\nEmail: ${email}`,
    });

    await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
      to: email,
      subject: "Thank you for your subscription",
      text: `Hi ${email},\n\nThank you for subsribing to our news letter!\n\nBest,\nIndigo Consulting`,
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
