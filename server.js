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
connectDataBase(process.env.MONGODB_CONNECT_URL);

//* CORS Initoalaization
const corsOptions = {
  origin: "https://shortly-nine-beta.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

//* Routes
app.use("/", shortenUrlRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listinig to Port ${port}...`));
