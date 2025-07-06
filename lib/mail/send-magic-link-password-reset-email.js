/** @format */

"use server";
import transporter from "@/utils/mail-transporter/mail-transporter";

export async function sendMagicLinkPasswordResetEmail(email, magicLink) {

    
  try {
    const isVerified = await transporter.verify();

    await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
      to: email,
      subject: "Password reset",
      html: `<p>Click the link to reset your password: <a href="${magicLink}">${magicLink}</a></p>`,
    });

    return;
  } catch (error) {
    console.error(
      "Something Went Wrong",
      error
    );
    return { message: "An error occured sending your email" };
  }
}
