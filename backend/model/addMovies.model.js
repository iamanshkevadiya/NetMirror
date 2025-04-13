const { default: mongoose } = require("mongoose");

const addMoviesSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "ADMIN" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: {
        type: String,
        enum: ["Series", "Movies"],
    },
});

const addMovies = mongoose.model("addMovies", addMoviesSchema);
module.exports = addMovies;