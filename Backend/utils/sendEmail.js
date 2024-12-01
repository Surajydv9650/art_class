const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
exports.sendMail = async (name, email, number, message) => {
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

exports.sendEnrollMail = async (name, email, number, course) => {
  const info = await transporter.sendMail({
    from: `${name}, ${email}`,
    to: process.env.EMAIL,
    subject: `Thanks for contacting!`,
    text: `Thanks for contacting , ${name}!`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f0f4f8; padding: 40px 0;">
      <div style="max-width: 650px; margin: auto; background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        
        <h1 style="color: #333; font-size: 28px; text-align: center; margin-bottom: 20px; font-weight: 600;">New Enrollment Received!</h1>

        <div style="border-top: 2px solid #eee; padding-top: 20px;">
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 12px;">
            <strong style="color: #333;">Name:</strong> ${name}
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 12px;">
            <strong style="color: #333;">Email:</strong> ${email}
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 12px;">
            <strong style="color: #333;">Phone Number:</strong> ${number}
          </p>
          
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            <strong style="color: #333;">Course:</strong>
            <div style="border-left: 4px solid #4CAF50; padding-left: 10px; margin-top: 8px; color: #333; font-style: italic;">
              ${course}
            </div>
          </p>
        </div>

        <div style="text-align: center; margin-top: 40px;">
          <p style="font-size: 14px; color: #888;">This email was sent from your website's enrollment form.</p>
        </div>
        
      </div>
    </div>
    `,
  });
  console.log("Message sent for enrollment: %s", info.messageId);
};

exports.sendContactReply = async (name, email, number) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: `New Enrollment Received!`,
    text: `New enrollment received from ${name}!`,
    html: ` <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: '#f9f9f9',
      color: '#333',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  }}>
      <h1 style={{
          fontSize: '24px',
          color: '#444',
          textAlign: 'center'
      }}>Acknowledgement of Your Inquiry</h1>
      <p>Dear <span style={{ color: '#0066cc', fontWeight: 'bold' }}>${name}</span>,</p>
      <p>Thank you for contacting <strong>Tara Art Classes</strong>! We’ve successfully received your message and are currently reviewing your inquiry. Expect to hear from us within 24–48 hours.</p>
      <p>If you need assistance in the meantime, please use the details below:</p>
      <div style={{ marginTop: '20px' }}>
          <p>📞 <strong>Phone:</strong> 8130011848</p>
          <p>📧 <strong>Email:</strong> <a href="mailto:taraartclass@gmail.com" style={{ textDecoration: 'none', color: '#0066cc' }}>taraartclass@gmail.com</a></p>
      </div>
      <p>Looking for inspiration? Visit our website to explore:</p>
      <ul>
          <li>🎨 <strong>Courses and Workshops</strong> tailored to all skill levels.</li>
          <li>🖼️ <strong>Gallery of Student Artwork</strong> for a sneak peek at our creative community.</li>
      </ul>
      <p>We look forward to being a part of your artistic journey!</p>
      <div style={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#666'
      }}>
          <p>Kind regards,</p>
          <p><strong>Tara Art Classes Team</strong></p>
          <p>🎨 Transforming passion into masterpieces.</p>
      </div>
  </div>`,
  });
  console.log("Message sent for enrollment: %s", info.messageId);
};
