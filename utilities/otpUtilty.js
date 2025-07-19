const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASS,
    }
});

async function sendOtp(OTP, recipientEmail) {
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: recipientEmail,
        subject: 'OTP for email verification',
        text: `OTP : ${OTP}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email Sent:', info.response);
    } catch (error) {
        console.error('❌ Email Send Error:', error);
    }
};

module.exports = {
    sendOtp
}