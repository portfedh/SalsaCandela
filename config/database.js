// Connect to MongoDB database using mongoose

// Import mongoose library
const mongoose = require("mongoose");

// When the database is unreachable, mongoose queues queries and waits for a
// connection before giving up. The default 10s wait would leave the party
// pages hanging for 10 seconds on every request during an outage. 2s is long
// enough to cover the brief window between the server accepting requests and
// the connection completing at startup, while keeping an outage cheap: the
// query fails fast and the page renders with its fallback values instead.
mongoose.set("bufferTimeoutMS", 2000);

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the mongoose.connect method
    const conn = await mongoose.connect(process.env.DB_STRING, {
      serverSelectionTimeoutMS: 5000,
    });
    // Logs a confirmation message
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // Log the error but keep the process alive. Only the party pages read
    // from MongoDB, and they already fall back to sane defaults when the
    // config is unavailable. Exiting here would take down the class pages,
    // the FAQ, the branch list and every checkout redirect as well, none of
    // which touch the database. Mongoose keeps retrying in the background.
    console.error("MongoDB connection failed, continuing without it:", err.message);
  }
};
// Exports the connectDB function
module.exports = connectDB;
