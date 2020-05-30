const mongoose = require('mongoose');

let movieList = mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    directors: {
        type: String
    },
    actors: {
        type: String
    },
    productionCompany: {
        type: String
    },
    releaseDate: {
        type: String
    },
    runningTime: {
        type: String
    },
    language: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now()
    }
});

const Movie = module.exports = mongoose.model('Movie', movieList);

module.exports.getMovies = (callback, limit) => {
    Movie.find(callback).limit(limit);
};

module.exports.getMovieById = (id, callback) => {
    let query = { _id: id };
    Movie.findOne(query, callback)
};

module.exports.addMovie = (movie, callback) => {
    Movie.create(movie, callback);
};

module.exports.updateMovie = (id, movie, options, callback) => {
    let query = { _id: id };
    let update = {
        title: movie.title,
        genre: movie.genre,
        description: movie.description,
        directors: movie.directors,
        actors: movie.actors,
        productionCompany: movie.productionCompany,
        releaseDate: movie.releaseDate,
        runningTime: movie.runningTime,
        language: movie.language,
        Date: Date.now()
    }
    Movie.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeMovie = (id, callback) => {
    let query = { _id: id };
    Movie.deleteOne(query, callback);
};