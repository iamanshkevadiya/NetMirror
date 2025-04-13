const addMovies = require("../model/addMovies.model.js");

const getaddMovies = async (req, res) => {
    try {
        let addMovies = await addMovies.find();
        console.log(addMovies);
        res.send(addMovies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const createaddMovies = async (req, res) => {
    if (req.file) {
        req.body.img = req.file.path;
    }
    req.body.user = req.user.id;

    try {
        let addMovies = await addMovies.create(req.body);
        console.log(addMovies);
        res.status(201).json(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getaddMoviesById = async (req, res) => {
    try {
        const { id } = req.params;
        let addMovies = await addMovies.findById(id);
        res.send(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateaddMovies = async (req, res) => {
    try {
        const { id } = req.params;
        let addMovies = await addMovies.findByIdAndUpdate(id, req.body, { new: true });
        res.send(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteaddMovies = async (req, res) => {
    try {
        const { id } = req.params;
        let addMovies = await addMovies.findByIdAndDelete(id);
        res.send(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getaddMovies, createaddMovies, getaddMoviesById, updateaddMovies, deleteaddMovies }