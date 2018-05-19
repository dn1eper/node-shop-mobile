'use strict';

const config = require('./config');
const express = require('express');
const utils = require('./utils');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SessionStore = require('express-mysql-session');
const app = express();

// Middleware
app.use(express.json()); // making sure of JSON support
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(cookieParser());
app.use(session({
	secret: 'some string',
	key: 'sid',
	resave: false,
	saveUninitialized: false,
	cookie: { 
		secure: false,
		httpOnly: true,
		maxAge: 3600000 //hour
	},
	store: new SessionStore({ 
		host: config.get("database:host"),
		user: config.get("SHOP_USER"),
		password: config.get("SHOP_PASSWORD"),
		database: config.get("SHOP_DB") })
}));

// Configuration
const asIs = (i, val) => val;
app.set('json spaces', 2);
app.set('json replacer', asIs);

// Routes
require('./routes')(app);

// Handle errors
app.use(function(err, req, res, next) {
	// TODO
});

// Starting server
app.listen(config.get("server:port"), () => {
	console.log('Listening on ' + config.get("server:port"));
});
