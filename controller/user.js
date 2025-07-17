const User = require("../models/user")
const crpto = require("crypto");

async function handleUserInfo(req, res){
    //console.log(req.body);
    const { username, address, BirthDate, email, password } = req.body;
    const user = await User.create({
        username,
        address,
        BirthDate,
        email,
        password,
    })
    const OTP = crpto.randomInt(1000, 10000);
    //console.log("OTP : " + OTP);
    return res.redirect("/verify");
}

module.exports = {
    handleUserInfo,
}