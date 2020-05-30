const express = require('express');
const moviesRouter = express.Router();

moviesRouter.get('/', (req, res) => {
    Movie.getMovies((err, movie) => {
        if(err) {
            throw err;
        }
        return res.json(movie);
    })
});

moviesRouter.get('/:_id', (req, res) => {
    Movie.getMovieById(req.params._id, (err, movie) => {
        if(err) {
            throw err;
        }
        return res.json(movie);
    })
});

moviesRouter.post('/', (req, res) => {
    let movie = req.body;
    Movie.addMovie(movie, (err, movie) => {
        if(err) {
            throw err;
        }
        return res.json(movie);
    })
});

moviesRouter.put('/:_id', (req, res) => {
    let id = req.params._id;
    let movie = req.body;
    Movie.updateMovie(id, movie, {}, (err, movie) => {
        if(err) {
            throw err;
        }
        return res.json(movie);
    })
});

moviesRouter.delete('/:_id', (req, res) => {
	let id = req.params._id;
	Movie.removeMovie(id, (err, movie) => {
		if(err){
			throw err;
		}
		return res.json(movie);
	})
});

module.exports = moviesRouter;