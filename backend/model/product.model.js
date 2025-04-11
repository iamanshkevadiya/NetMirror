const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "ADMIN", require: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "" },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["Series", "Movies"],
    },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;