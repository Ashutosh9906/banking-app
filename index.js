const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");

const staticRoute = require("./routes/staticRoute")

const PORT = 3000;
const app = express();

mongoose.connect("mongodb://localhost:27017/banking-app")
        .then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// app.get("/", (req, res) => {
//     res.render("home");
// });

app.use("/user", staticRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));