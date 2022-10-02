const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("You are GETing videos json data");
});

// router.get(`/${videoId}`, (req, res) => {
//     res.send("Test success");
// });

module.exports = router;
