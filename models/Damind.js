const mongoose = require("mongoose");
const damindSchema = mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    ProductQuantity: {
      type: Number,
      required: true,
    },
    ProductType: {
      type: String,
      required : true 
    },
    ProductSize: {
      type: String,
      required : true 
    },
    
    ProductColor: {
      type: String,
      required: true,
    },
    Attachement: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const damind = mongoose.model("damind", damindSchema);
module.exports = damind;