const { Router } = require("express");

const { handleUserInfo } = require("../controller/user")
const { handleSendOtp, handleOtpVerification } = require("../controller/otpCont")
const { validateEmail, otpCoolDown, validateOtp } = require("../middlewares/validateEmail")

const router = Router();

router.get("/createAccount", (req, res) => {
    return res.render("createAccount");
});

router.get("/verify", (req, res) => {
    return res.render("verify");
});

router.post("/createAccount", handleUserInfo);
router.post("/sendOtp", validateEmail, otpCoolDown, handleSendOtp,);
router.post("/verifyOtp", validateOtp, handleOtpVerification);

module.exports = router