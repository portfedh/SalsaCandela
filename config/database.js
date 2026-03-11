// Connect to MongoDB database using mongoose

// Import mongoose library
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the mongoose.connect method
    const conn = await mongoose.connect(process.env.DB_STRING, {});
    // Logs a confirmation message
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // If an error occurs log the error message to the console
    console.error(err);
    // Exit Node.js process with an exit code of 1, indicating an error.
    process.exit(1);
  }
};
// Exports the connectDB function
module.exports = connectDB;
