/** @format */

"use server";
import { redirect } from "next/navigation";
import transporter from "@/utils/mail-transporter/mail-transporter";

export async function RegisterEmail(data) {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

    const address = `${baseUrl}/login`;


  try {
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

    const Registration = await transporter.sendMail({
      from: email,
      to: process.env.SITE_MAIL_RECEIVER,
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
        html: `<p>Login: <a href="${address}">Login Noew</a></p>`,
    });

    await transporter.sendMail({
      from: process.env.SITE_MAIL_RECEIVER,
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
  } catch (error) {
    console.error("Something Went Wrong", error);
    return {
      emailSubmissionError:
        "We're sorry, but something went wrong dispatching your email. However, your details have been recieved, and we will contact you shortly.",
    };
  }
  redirect("/register/pending-auth");
}
