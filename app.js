const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const moviesRoute = require('./routers/moviesRouter');
const genresRoute = require('./routers/genresRouter');
const mainRoute = require('./routers/mainRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',mainRoute);
app.use('/api/movies',moviesRoute);
app.use('/api/genres',genresRoute);

Movie = require('./models/movies');
Genre = require('./models/genres');

mongoose.connect('mongodb://localhost/rest-project', { useNewUrlParser: true, useUnifiedTopology: true});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

