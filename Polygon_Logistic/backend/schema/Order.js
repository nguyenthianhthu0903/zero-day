const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema({
  trackingNumber: { type: String },
  status: { type: String },
  location: { type: String },
  receiver: { type: String },
});

module.exports = mongoose.model("Order", Order);
