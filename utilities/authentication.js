const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function createTokenForUser(id, role){
    const payload = { id, role }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "30m" });
    return token;
}

module.exports = {
    createTokenForUser
}