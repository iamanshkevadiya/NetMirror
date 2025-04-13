const { Router } = require('express');
const { decode } = require('../middlewares/decodeJwt');
const upload = require('../utils/imageUpload');
const { getaddMovies, getaddMoviesById, createaddMovies, updateaddMovies, deleteaddMovies } = require('../controller/addMovies.controller');

const addMoviesRouter = Router();

addMoviesRouter.get('/', getaddMovies);
addMoviesRouter.get('/:addMoviesId', getaddMoviesById);
addMoviesRouter.post('/', decode, upload.single("img"), createaddMovies);
addMoviesRouter.patch('/:addMoviesId', decode, updateaddMovies);
addMoviesRouter.delete('/:addMoviesId', decode, deleteaddMovies);

module.exports = addMoviesRouter;