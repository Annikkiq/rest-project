const express = require('express');
const genresRouter = express.Router();

genresRouter.get('/', (req, res) => {
    Genre.getGenres((err, genre) => {
        if(err) {
            throw err;
        }
        return res.json(genre);
    })
});

genresRouter.get('/:_id', (req, res) => {
    Genre.getGenreById(req.params._id, (err, genre) => {
        if(err) {
            throw err;
        }
        return res.json(genre);
    })
});

genresRouter.post('/', (req, res) => {
	let genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		return res.json(genre);
	})
});

genresRouter.put('/:_id', (req, res) => {
	let id = req.params._id;
	let genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		return res.json(genre);
	})
});

genresRouter.delete('/:_id', (req, res) => {
	let id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err){
			throw err;
		}
		return res.json(genre);
	})
});

module.exports = genresRouter;