const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  image: {
    type: String,
    default: "",
  },
  watchlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Watchlist",
  },
})

const User = mongoose.model("User", userSchema);
module.exports = User;