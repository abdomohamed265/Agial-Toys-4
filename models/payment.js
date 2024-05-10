const mongoose = require("mongoose");
const paymentSchema = mongoose.Schema(
  {
    holderName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type:String,
      required: true,
    },
    expiaryDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;