const User = require("../models/user")
const crpto = require("crypto");
const { sendOtp } = require("../utilities/otpUtilty");
const { hash } = require("bcryptjs");

const Otp = require("../models/otp");

async function handleUserInfo(req, res) {
    //console.log(req.body);
    try {
        const { username, address, BirthDate, email, password } = req.body;

        const isUser = await User.findOne({ email });
        if(isUser){
            return res.render("createAccount", {
                isUser,
            })
        }

        const saltRounds = 10;
        const hashPassword = await hash(password, saltRounds);

        const otpUser = await Otp.findOne({ email })
        //console.log(otpUser);
        if(!otpUser || !otpUser.isVerified){
            return res.status(400).json({ msg: "verify your email first" });
        }

        const user = await User.create({
            username,
            address,
            BirthDate,
            email,
            password: hashPassword,
        })
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log("Error : ", error);
        return res.status(401).json({ success: false });
    }
}

async function handleVerifyPassword(req, res){
    const {email, password} = req.body;
    let user = await User.findOne({ email });
    console.log("User : ", user);
    if(!user){
        return res.status(404).json({ err: "User not exist" });
    }
    return res.status(200).json({ msg: "Success" });
}

module.exports = {
    handleUserInfo,
    handleVerifyPassword
}