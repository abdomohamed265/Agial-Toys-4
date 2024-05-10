const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    products: [
        {
          productId: {
            type: mongoose.Types.ObjectId,
            ref: 'products', 
          },
          quantity: {
            type: Number,
            default: 1, 
          },
        },
      ],
    userId: {
        type:{
            type: mongoose.Types.ObjectId,
            ref:"Users"
        },
    },
  },
  {
    timestamps: true,
  }
);
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;