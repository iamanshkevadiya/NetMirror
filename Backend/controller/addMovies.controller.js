const addMovie = require("../model/addMovies.model");

const getaddMovies = async (req, res) => {
    try {
        let addMovies = await addMovie.find();
        console.log(addMovies);
        res.send(addMovies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// const createaddMovies = async (req, res) => {
//     if (req.file) {
//         req.body.image = req.file.path;
//     }
//     req.body.user = req.user._id;

//     try {
//         let addMovies = await addMovie.create(req.body);
//         console.log(addMovies);
//         res.status(201).json(addMovies);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// }

const createaddMovies = async (req, res) => {
    console.log("Reached controller");

    if (req.file) {
        console.log("File received:", req.file);
        req.body.image = req.file.path;
    } else {
        console.log("No file received");
    }

    console.log("Request Body:", req.body);
    req.body.user = req.user?._id;

    try {
        let addMovies = await addMovie.create(req.body);
        console.log("Movie created:", addMovies);
        res.status(201).json(addMovies);
    } catch (error) {
        console.error("Error creating movie:", error.message);
        res.status(500).send(error.message);
    }
}


const getaddMoviesById = async (req, res) => {
    try {
        const { addMoviesId } = req.params;
        let addMovies = await addMovie.findById(addMoviesId);
        res.send(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateaddMovies = async (req, res) => {
    try {
        const { addMoviesId } = req.params;
        let addMovies = await addMovie.findByIdAndUpdate(addMoviesId, req.body, { new: true });
        res.send(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteaddMovies = async (req, res) => {
    try {
        const { addMoviesId } = req.params;
        let addMovies = await addMovie.findByIdAndDelete(addMoviesId);
        res.send(addMovies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getaddMovies, createaddMovies, getaddMoviesById, updateaddMovies, deleteaddMovies }