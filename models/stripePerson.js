// Mongoose Class Stripe Person Schema
// ***********************************

// Import mongoose
const mongoose = require("mongoose");

// Create schema
const StripePersonSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: true,
  },
  livemode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  access_id: {
    type: String,
    required: true,
  },
});

// Export person schema
module.exports = mongoose.model("StripePerson", StripePersonSchema);
