const express = require('express');
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.send('Please use /api/movies or /api/genres')
});

module.exports = mainRouter;