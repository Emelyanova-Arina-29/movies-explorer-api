const movieRouter = require('express').Router();
const {
  createMovie,
  getAllMovies,
  removeMovieById,
} = require('../controllers/movies');

const {
  validationCreateMovie,
  validationMovieId,
} = require('../middlewares/validation');

movieRouter.post('/', validationCreateMovie, createMovie);

movieRouter.get('/', getAllMovies);

movieRouter.delete('/:movieId', validationMovieId, removeMovieById);

module.exports = movieRouter;
