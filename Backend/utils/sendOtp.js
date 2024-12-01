const nodemailer = require("nodemailer");
require("dotenv").config();

const sendOTP = async (email, otp) => {
    console.log(otp,'OTP')
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL, // Update sender name and email
    to: email, // Send the OTP to the user's email
    subject: `Your OTP Code`, // Subject of the email
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333; font-size: 24px; text-align: center; margin-bottom: 20px;">Your OTP Code</h1>
        
        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
          Hello! Here is your One-Time Password (OTP):
        </p>
        
        <h2 style="color: #333; font-size: 32px; text-align: center; margin: 20px 0;">${otp}</h2>

        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Please use this OTP to complete your verification. This code is valid for a limited time only.
        </p>

        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 14px; color: #888;">If you did not request this OTP, please ignore this email.</p>
        </div>
      </div>
    </div>
    `,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendOTP;
