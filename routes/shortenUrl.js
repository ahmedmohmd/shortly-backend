//* Imports
const express = require("express");
const { addUrl, getUrl } = require("../controllers/shortenUrl");
const router = express.Router();

//* Routes
//* Add Url
router.post("/shortUrls", addUrl);

//* Get Url
router.get("/:shortUrl", getUrl);

module.exports = router;
