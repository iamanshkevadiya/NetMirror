const { Router } = require('express');
const { getaddMovies, getaddMoviesById, createaddMovies, updateaddMovies, deleteaddMovies } = require('../controller/addMovies.controller');
const { decode } = require('../middlewares/decodeJwt');
const upload = require('../utils/imageUpload');

const addMoviesRouter = Router();

addMoviesRouter.get('/', getaddMovies);
addMoviesRouter.get('/:addMoviesId', getaddMoviesById);
addMoviesRouter.post('/',decode, upload.single("image"), createaddMovies);
addMoviesRouter.patch('/:addMoviesId', decode, updateaddMovies);
addMoviesRouter.delete('/:addMoviesId', decode, deleteaddMovies);

module.exports = addMoviesRouter;