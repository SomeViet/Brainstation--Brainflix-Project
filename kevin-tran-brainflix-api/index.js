require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const { PORT, apiKey } = process.env;

app.use(express.static("public"));

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
    res.send("You are GETing the index page. Go Away");
});

app.listen(PORT, () => {
    console.log("Server is listening to: " + PORT);
});
