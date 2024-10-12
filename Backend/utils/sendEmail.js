const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (name, email, number, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

//   console.log(process.env.PASSWORD, "PASSWORD");

  const info = await transporter.sendMail({
    from: `${name}, ${email}`,
    to: process.env.EMAIL,
    subject: `New Query Received!`,
    text: `Query received from ${name}!`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333; font-size: 24px; text-align: center; margin-bottom: 20px;">New Query Received!</h1>
        
        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
          <strong style="color: #333;">Name:</strong> ${name}
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
          <strong style="color: #333;">Email:</strong> ${email}
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
          <strong style="color: #333;">Phone Number:</strong> ${number}
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          <strong style="color: #333;">Message:</strong>
          <br/>
          <div style="border-left: 4px solid #333; padding-left: 10px; margin-top: 10px;">
            ${message}
          </div>
        </p>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 14px; color: #888;">This email was sent from your website contact form.</p>
        </div>
      </div>
    </div>
    `,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
