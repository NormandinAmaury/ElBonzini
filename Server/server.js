/**
 * Created by Margot on 14/12/2016.
 */
const express = require('express');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jwt-simple');

const config = require('./config/config');
const routes = require('./api/routes/index');

mongoose.Promise = require('bluebird');

mongoose.connect(config.development.mongoUrl)
  .then(console.log('Connection OK !!'))
  .catch((err) => console.log('Connection ERROR !!' + err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('jwtSecret', config.development.jwtSecret);

app.use(cors());

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 8000;

app.use('/api', routes);

app.listen(port);

console.log('Magic happens on port ' + port);
