const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const offer = require('./models/offer')
const User = require("./models/userModel");
const eduction = require("./models/eduction")
const skill = require("./models/skill")
const smart = require("./models/smart")
const build = require("./models/build")
const card = require("./models/card")
const entertainment = require("./models/entertainment")
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cartRouter = require("./routes/cart")
const Damind = require("./models/Damind")
const payment = require("./models/payment")
const bcrypt = require("bcrypt");
const entertainmet = require("./models/entertainment");
const damind = require("./models/Damind")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port = 3000;
app.use(cors());

app.use(
  cors({
    origin: "*",
  })
);
const corsOptions = {
  origin: "https://agial-toys-4.onrender.com/"
}
app.use(express.json());
app.use(cors(corsOptions));

app.use("/cart",cartRouter)

app.post("/",async(req,res)=>{
  const{ProductName,ProductQuantity,ProductColor,ProductSize,ProductType,Attachement} = req.body
  const data = {
    ProductName:ProductName,
    ProductQuantity:ProductQuantity,
    ProductColor:ProductColor,
    ProductSize:ProductSize,
    ProductType:ProductType,
    Attachement:Attachement,
  }
  await damind.insertMany([data])
})
app.post("/payment",async(req,res)=>{
  const{holderName,cardNumber,expiaryDate,cvv} = req.body
  const data = {
    holderName:holderName,
    cardNumber:cardNumber,
    expiaryDate:expiaryDate,
    cvv:cvv,
  }
  await payment.insertMany([data])
})

app.post("/product", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newProduct = await Product.create({ name, title, quantity, price });
    return res.status(200).json({ data: newProduct });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.post("/entertainment", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newEntertainment = await entertainment.create({ name, title, quantity, price });
    return res.status(200).json({ data: newEntertainment });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/entertainments", async (req, res) => {
  try {
    const entertainments = await entertainment.find({});
    return res.status(200).json({ entertainments });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.post("/card", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newCard = await card.create({ name, title, quantity, price });
    return res.status(200).json({ data: newCard });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/cards", async (req, res) => {
  try {
    const cards = await card.find({});
    return res.status(200).json({ cards });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
app.post("/build", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newBuild = await build.create({ name, title, quantity, price });
    return res.status(200).json({ data: newBuild });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/builds", async (req, res) => {
  try {
    const builds = await build.find({});
    return res.status(200).json({ builds });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
app.post("/smart", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newSmart = await smart.create({ name, title, quantity, price });
    return res.status(200).json({ data: newSmart });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/smarts", async (req, res) => {
  try {
    const smarts = await smart.find({});
    return res.status(200).json({ smarts });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
app.post("/skill", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newSkill = await skill.create({ name, title, quantity, price });
    return res.status(200).json({ data: newSkill });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/skills", async (req, res) => {
  try {
    const skills = await skill.find({});
    return res.status(200).json({ skills });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
app.post("/eduction", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newEduction = await eduction.create({ name, title, quantity, price });
    return res.status(200).json({ data: newEduction });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/eductions", async (req, res) => {
  try {
    const eductions = await eduction.find({});
    return res.status(200).json({ eductions });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});
app.post("/offer", async (req, res) => {
  try {
    const { name, title, quantity, price } = req.body;
    console.log(name, title, quantity);
    const newOffer = await offer.create({ name, title, quantity, price });
    return res.status(200).json({ data: newOffer });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

app.get("/offers", async (req, res) => {
  try {
    const offers = await offer.find({});
    return res.status(200).json({ offers });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// register
app.post("/signup", async (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
  };

  const existingUser = await User.findOne({ email: data.email });
  console.log(existingUser);
  if (existingUser) {
    res.status(400).json({
      message: "user already exists. please choose a different username",
    });
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedPassword;
    const userdata = await User.insertMany(data);
    console.log(userdata);
    return res.status(201).json({ user: userdata });
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("user not found");
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordMatch) {
      const token = jwt.sign({ userMail: user.email, userID: user.id }, 'test');
      res.status(200).json({ token });
    } else {
      req.send("wrong password");
    }
  } catch {
    res.send("worng details");              
  }
});



app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
  



mongoose.set("strictQuery", false);
mongoose
  .connect(
    'mongodb+srv://mohamednsr4:mohamednsr6@cluster0.psrhc6b.mongodb.net/all-data?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log("conected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
