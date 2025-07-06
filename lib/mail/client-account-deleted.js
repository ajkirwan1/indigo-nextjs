/** @format */

"use server";
import transporter from "@/utils/mail-transporter/mail-transporter";

export async function DeleteAccountEmail(email) {
  try {
    const adminInfo = await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
      to: process.env.SITE_MAIL_RECEIVER,
      subject: "Client account deletion",
      text: `A client has deleted their account.`,
    });

    const clientInfo = await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
      to: email,
      subject: "Account deleted with Indigo Consulting",
      text: `Your account has been deleted.`,
    });

    return {
      success: true,
      adminInfo,
      clientInfo,
    };
  } catch (error) {
    console.error("DeleteAccountEmail Error:", error);
    return {
      success: false,
      emailSubmissionError:
        "We're sorry, but something went wrong dispatching your email. However, your account has been deleted successfully.",
    };
  }
}
