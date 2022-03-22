const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://lakecombs:lakecombs@cluster0.beoic.mongodb.net/LACONIC?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected to ${connect.connection.host}`.green.bold);
  } catch (error) {
    console.log(`An error occured : ${error.message}`.red.bold);
  }
};

module.exports = connectDB;
