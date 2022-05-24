import nodemailer from "nodemailer";
import constant from "../constants/index.js";

const sendEmail = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: constant.EMAIL_SERVICE,
      auth: {
        user: constant.EMAIL_USER,
        pass: constant.EMAIL_PASSWORD,
      },

      // host: constant.EMAIL_HOST,
      // port: constant.EMAIL_PORT,
      // secure: constant.EMAIL_SECURE,
      // auth: {
      //   user: constant.EMAIL_USER,
      //   pass: constant.EMAIL_PASSWORD,
      // },
    });
    await transporter.sendMail({
      from: constant.EMAIL_USER,
      from: "Programer Manado",
      to: email,
      subject: subject,
      html: html,
    });
    console.log("Email Sent Succesfully");
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
