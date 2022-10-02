require("dotenv").config();
const express = require("express");
const router = express.Router();
const videoData = require("../data/videos.json");
const fs = require("fs");

router.get("/", (req, res) => {
    res.send(videoData);
});

router.get("/:videoId", (req, res) => {
    const requestedVideoId = req.params.videoId;

    const requestedVideoData = videoData.find((videoData) => {
        return videoData.id == requestedVideoId;
    });

    res.send(requestedVideoData);
});

router.post("/", (req, res) => {
    const newVideo = req.body;
    const writeVideo = [...videoData, newVideo];
    fs.writeFile("./data/videos.json", JSON.stringify(writeVideo), (err) => {
        if (err) {
            console.log(err);
            res.status(400).send(false);
        } else {
            res.status(201).send(true);
            console.log("Video write successful");
        }
    });
});

module.exports = router;
