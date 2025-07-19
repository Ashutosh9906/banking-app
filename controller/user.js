const User = require("../models/user")
const crpto = require("crypto");
const { sendOtp } = require("../utilities/otpUtilty");
const { hash } = require("bcryptjs");

async function handleUserInfo(req, res){
    //console.log(req.body);
    const { username, address, BirthDate, email, password } = req.body;

    const saltRounds = 10;
    const hashPassword = await hash(password, saltRounds);

    const user = await User.create({
        username,
        address,
        BirthDate,
        email,
        password: hashPassword,
    })
    return res.redirect("/");
}

module.exports = {
    handleUserInfo,
}