const express = require("express");
const { resolve } = require("path")

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", resolve("./views"))

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));