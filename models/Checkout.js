// models/Checkout.js

const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
