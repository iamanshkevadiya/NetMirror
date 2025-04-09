const Product = require("../model/product.model")

const getProducts = async (req, res) => {
    try {
        let Product = await Product.find();
        console.log(Product);
        res.send(Product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const createProduct = async (req, res) => {
    if (req.file) {
        req.body.img = req.file.path;
    }
    req.body.user = req.user.id;

    try {
        let Product = await Product.create(req.body);
        console.log(Product);
        res.status(201).json(Product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        let Product = await Product.findById(id);
        res.send(Product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let Product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.send(Product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let Product = await Product.findByIdAndDelete(id);
        res.send(Product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getProducts, createProduct, getProductById, updateProduct, deleteProduct }