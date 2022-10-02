require("dotenv").config();
const express = require("express");
const router = express.Router();
const videoData = require("../data/videos.json");

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

module.exports = router;
