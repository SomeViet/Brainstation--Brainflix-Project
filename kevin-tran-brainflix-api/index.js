require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { PORT, BACKEND_URL } = process.env;
const videoRoute = require("./routes/videos");

app.use("/videos", videoRoute);

app.get("/", (req, res) => {
    res.send("You are GETing the index page");
});

app.listen(PORT, () => {
    console.log("Server is listening to: " + PORT);
});
