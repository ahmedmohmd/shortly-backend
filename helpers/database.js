//* Imports
const mongoose = require("mongoose");

//* DB Connect Function
const connectDataBase = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDataBase;
