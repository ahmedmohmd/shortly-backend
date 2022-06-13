//* Imports
const ShortUrl = require("../models/shortUrl");

//* Add URL Controller Function
const addUrl = async (req, res) => {
  try {
    let url = await ShortUrl.findOne({ full: req.body.fullUrl });

    if (!url) {
      const su = await ShortUrl({
        full: req.body.fullUrl,
      });

      await su.save();

      url = await ShortUrl.findOne({ full: req.body.fullUrl });

      res.json({ url });
    } else {
      res.json({ url });
    }
  } catch (error) {
    res.status(500).send("Unexpected Error Occured!");
  }
};

//* Get URL Controller Function
const getUrl = async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (shortUrl == null) return res.sendStatus(404);
    shortUrl.clicks++;
    await shortUrl.save();
    res.redirect(shortUrl.full);
  } catch (err) {
    res.status(500).send("Unexpected Error Occured!");
  }
};

module.exports = {
  addUrl,
  getUrl,
};
