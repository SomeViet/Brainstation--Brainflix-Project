require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const { PORT, apiKey } = process.env;

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    if (req.query.api_key !== apiKey) {
        res.status(401).send("Please use valid API Key");
    } else {
        next();
    }
});

const videoRoute = require("./routes/videos");
app.use("/videos", videoRoute);

app.get("/", (_, res) => {
    res.status(403).send(
        "You are GETing the index page. There is nothing here"
    );
});

app.listen(PORT, () => {
    console.log("Server is listening to: " + PORT);
});
