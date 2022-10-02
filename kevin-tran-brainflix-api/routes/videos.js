const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("You are GETing videos json data");
});

module.exports = router;
