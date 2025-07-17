const { Router } = require("express");

const { handleUserInfo } = require("../controller/user")

const router = Router();

router.get("/createAccount", (req, res) => {
    return res.render("createAccount");
})

router.post("/createAccount", handleUserInfo);

module.exports = router