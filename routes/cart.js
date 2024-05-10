const express = require("express");
const  Cart  = require("../models/cart");

require("dotenv").config();

const router = express.Router();

router.patch("/", async (req, res) => {
    try{
    const { userId , products }= req.body
    const updatedCart = await Cart.findOneAndUpdate(
        { userId },
        { userId, products },
        { upsert: true, new: true }
      );

    return res.status(200).json({updatedCart})
    }
    catch (e){
        return res.status(400).json({"message": e.message})
    }
}
)



router.get("/", async(req, res)=> {
    try {
    const { userId } = req.body
    const updatedCart = await Cart.findOneAndUpdate(
        { userId },
        { userId, products:[] },
        { upsert: true, new: true }
      );
      
    return res.status(200).json({updatedCart})
}
catch (e){
    return res.status(400).json({"message": e.message})
}
})
module.exports = router;