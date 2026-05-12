const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "https://hari-motors-bike-service-app-utan-ctodoyv9u-hariram20s-projects.vercel.app/",
    credentials: true,
  })
);
app.use(express.json());

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

const userSchema = new mongoose.Schema({

  name: String,

  email: String,

  password: String

});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
    name,
    email,
    password: hashedPassword
});

await user.save();

    res.json({
      message: "User Registered Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Registration Failed"
    });
  }
});

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        message: "User Not Found"
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatch) {

      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
  {
    email: user.email,
    id: user._id
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d"
  }
);

app.post("/book-service", async (req, res) => {

  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.json({
      message: "Service Booked Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Booking Failed"
    });
  }
});

res.json({
  message: "Login Successful",
  token
});

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login Failed"
    });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

const bookingSchema = new mongoose.Schema({

  customerName: String,

  bikeModel: String,

  serviceType: String,

  bookingDate: String,

  problem: String

});

const Booking = mongoose.model("Booking", bookingSchema);