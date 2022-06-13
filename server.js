//* Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDataBase = require("./helpers/database");
const shortenUrlRouter = require("./routes/shortenUrl");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//* Connect Database
connectDataBase("mongodb://localhost/shortUrl");

//* CORS Initoalaization
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

//* Routes
app.use("/", shortenUrlRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listinig to Port ${port}...`));
