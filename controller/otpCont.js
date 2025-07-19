const { randomInt } = require("crypto");
const { sendOtp } = require("../utilities/otpUtilty");
const { hash, compare } = require("bcryptjs")

const Otp = require("../models/otp");

async function handleSendOtp(req, res) {
    const OTP = randomInt(100000, 1000000);
    const recipientEmail = req.body.email;

    await sendOtp(OTP, recipientEmail);

    const saltRounds = 10;
    const hashedOtp = await hash(OTP.toString(), saltRounds);

    const otp = await Otp.create({
        otp: hashedOtp,
        email: recipientEmail,
    })
}

async function handleOtpVerification(req, res) {
    try {
        const { email, otp } = req.body;
        const user = await Otp.findOne({ email });
        // console.log(user);

        const isMatch = await compare(otp, user.otp);
        if(isMatch){
            await Otp.findOneAndUpdate({ email }, { isVerified:true });
        }
        // console.log("Otp isMatched: ", isMatch)
        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    handleSendOtp,
    handleOtpVerification
}