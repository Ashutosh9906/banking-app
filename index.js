const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("node:path");

const staticRoute = require("./routes/staticRoute");
const manageRoute = require("./routes/manageRoutes");
const { verifyToken } = require("./middlewares/validateEmail")

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public"))); 

mongoose.connect("mongodb://localhost:27017/banking-app")
        .then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.render("home");
// });

app.get("/home", (req, res) => {
        return res.render("home");
})
app.use("/account", verifyToken, manageRoute)
app.use("/user", staticRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));