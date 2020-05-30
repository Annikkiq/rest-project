const mongoose = require('mongoose');

let genreList = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
    }
});

const Genre = module.exports = mongoose.model('Genre', genreList);

module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
};

module.exports.getGenreById = (id, callback) => {
	let query = { _id: id };
	Genre.findOne(query, callback);
};

module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
};

module.exports.updateGenre = (id, genre, options, callback) => {
	let query = {_id: id};
	let update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeGenre = (id, callback) => {
	let query = {_id: id};
	Genre.deleteOne(query, callback);
};