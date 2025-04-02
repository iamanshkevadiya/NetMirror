const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET || "NetMirror_DB";


const siunup = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email, password: password });
    if (!user) {
      return res.status(403).json({ msg: "User Already registered" });
    }
    let hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    user = await User.create(req.body);
    let data = {
      email: user.email,
      id: user.id,
      role: user.role,
      name: user.name,
      isActive: user.isActive,
    };
    let token = await jwt.sign(data, JWT_SECRET);
    res.cookies("User_token", token);
    return res.status(201).json({
      msg: "User Created",
      token: token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const Login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ msg: "Invalid credentials" });
    }
    let data = {
      email: user.email,
      id: user.id,
      role: user.role,
      name: user.name,
    };
    let token = await jwt.sign(data, JWT_SECRET);
    res.cookies("User_token", token);
    return res.status(200).json({ msg: "User logged in", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

