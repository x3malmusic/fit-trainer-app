import nodemailer from "nodemailer";

export const sendEmailVerification = (email, link, code) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: '<fit-trainer-app.com>',
    to: email,
    subject: "Email verification",
    text: `click on the link to verify your email - ${link}, your verification code is ${code}`,
  };

  transporter.sendMail(options);
}