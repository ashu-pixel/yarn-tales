const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
           
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, default: "placed" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);