const Movie = require("../models/movie.model");

/**
 * It's an asynchronous function that uses the await keyword to wait for the result of the find()
 * method on the Movie model.
 *
 * The find() method returns a promise, which is why we can use the await keyword.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(error);
    }
};

/**
 * It's an asynchronous function that uses the Movie model to find a Movie by its id, and then
 * sends a response with the Movie's data.
 * @param req - The request object.
 * @param res - The response object.
 */
const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

/**
 * It creates a new Movie using the data from the request body and returns the created Movie in the
 * response.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

/**
 * It takes the id of the Movie to be updated from the request params, and the updated Movie data
 * from the request body, and then updates the Movie in the database with the new data, and returns
 * the updated Movie to the client.
 * @param req - The request object.
 * @param res - The response object.
 */
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

/**
 * It finds a Movie by its id and deletes it.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
};