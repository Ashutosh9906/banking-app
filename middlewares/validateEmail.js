const Otp = require("../models/otp");
const User = require("../models/user");

async function validateEmail(req, res, next) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(req.body.email)) {
        return res.status(400).json({ msg: "Invalid Email" })
    }
    next();
}

async function otpCoolDown(req, res, next) {
    const oneMinute = 60 * 1000;
    const email = req.body.email;
    const user = await Otp.findOne({ email });
    // console.log(user.updatedAt.getTime());
    if (user && (Date.now() < (user.updatedAt.getTime() + oneMinute))) {
        return res.status(400).json({ msg: "CoolDown Period" })
    }
    next();
}

async function validateOtp(req, res, next) {
    const fiveMinutes = 5 * 60 * 1000;
    const email = req.body.email;
    const user = await Otp.findOne({ email });
    if (!(Date.now() < (user.updatedAt.getTime() + fiveMinutes))) {
        return res.status(400).json({ msg: "Otp Expired, Try Again" })
    }
    next();
}

async function CheckEmail(req, res, next) {
    try {
        const email = req.body.email;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(500).json({ msg: "Email already exist" });
        }
        next();
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg:"Email already exist" })
    }
}

module.exports = {
    validateEmail,
    otpCoolDown,
    validateOtp,
    CheckEmail
};