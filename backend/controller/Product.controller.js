const Product = require("../model/product.model")

const getProducts = async (req, res) => {
    try {
        let Products = await Product.find();
        console.log(Products);
        res.send(Products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const createProduct = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    
    if (req.file) {
        req.body.image = req.file.path;
    }
    req.body.user = req.user.id;

    try {
        let Products = await Product.create(req.body);
        console.log(Products);
        res.status(201).send(Products);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        let Products = await Product.findById(id);
        res.send(Products);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        let Products = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.send(Products);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        
        let Products = await Product.findByIdAndDelete(id);
        console.log(Products);
        
        res.send(Products);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getProducts, createProduct, getProductById, updateProduct, deleteProduct }