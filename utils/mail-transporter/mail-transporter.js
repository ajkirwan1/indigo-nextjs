import nodemailer from "nodemailer";

const {
  SMTP_SERVER_HOST,
  SMTP_SERVER_USERNAME,
  SMTP_SERVER_PASSWORD,
} = process.env;

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

export default transporter;
