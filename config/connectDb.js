const mongoose = require("mongoose");
const colors = require("colors");

const url = "mongodb+srv://sanskarkakani2004:sanskarkakani2004@cluster0.l0ot2qg.mongodb.net/?retryWrites=true&w=majority"

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
