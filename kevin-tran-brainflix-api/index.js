require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const { PORT, BACKEND_URL, apiKey } = process.env;

app.use((req, res, next) => {
    if (req.query.api_key !== apiKey) {
        res.status(400).send("Please use valid API Key");
    } else {
        next();
    }
});
const videoRoute = require("./routes/videos");

app.use("/videos", videoRoute);

app.get("/", (req, res) => {
    res.send("You are GETing the index page");
});

app.listen(PORT, () => {
    console.log("Server is listening to: " + PORT);
});
