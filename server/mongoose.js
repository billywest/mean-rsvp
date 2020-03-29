const mongoose = require("mongoose");

// This file will handle connection logic to the MongoDB database
const dbConnectString = "mongodb+srv://meanAdmin:Bwsxdcftest123@mean-jufct.mongodb.net/test?retryWrites=true&w=majority";

// Updating mongoose's promise version
mongoose.Promise = global.Promise;

mongoose
  .connect(dbConnectString, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully :");
  })
  .catch(e => {
    console.log(e, "Error while attempting to connect to MongoDB");
  });

module.exports = {
  mongoose
};
