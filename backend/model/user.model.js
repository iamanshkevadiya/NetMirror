import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  watchlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Watchlist",
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
