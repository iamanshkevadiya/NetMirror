const { default: mongoose } = require("mongoose");

const addMoviesSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    category: {
        type: String,
        enum: ["series", "movie"],
    },
});

const addMovie = mongoose.model("addMovie", addMoviesSchema);
module.exports = addMovie;