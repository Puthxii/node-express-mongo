const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    imdbId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    trailerLink: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    backdrops: {
        type: [String],
        required: true
    },
    reviews: {
        type: [{
            // Define the structure of a review if needed
            // For example:
            reviewer: String,
            rating: Number,
            comment: String
        }],
        default: [] // Default to an empty array if no reviews are present
    }
});

// Create the movie model
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;
