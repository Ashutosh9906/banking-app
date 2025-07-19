const { Router } = require("express");

const { handleUserInfo } = require("../controller/user")
const { handleSendOtp, handleOtpVerification } = require("../controller/otpCont")

const router = Router();

router.get("/createAccount", (req, res) => {
    return res.render("createAccount");
});

router.get("/verify", (req, res) => {
    return res.render("verify");
});

router.post("/createAccount", handleUserInfo);
router.post("/sendOtp", handleSendOtp);
router.post("/verifyOtp", handleOtpVerification);

module.exports = router