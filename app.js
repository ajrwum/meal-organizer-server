require('dotenv').config();
require('./config/dbConfig');
require('./config/passport');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport'); // auth library (needs sessions)
const cors = require('cors');

const app = express();

//? Services like heroku use something called a proxy and you need to add this to your server
app.set('trust proxy', 1);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Allow server to extract/parse cookies from http requests headers (check req.cookies)
// app.use(cookieParser());

/*
Create a session middleware with the given options.
Note:  Session data is not saved in the cookie itself, just the session ID. 
Session data is stored server-side.
*/
app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  })
);

// passport init : these rules MUST set be after session setup (lines above)
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/index'));
app.use('/api/auth', require('./routes/auth'));
app.use('/foods', require('./routes/foods'));
app.use('/meals', require('./routes/meals'));

app.use('/api/*', (req, res, next) => {
  const error = new Error('Ressource not found.');
  error.status = 404;
  next(error);
});

if (process.env.NODE_ENV === 'production') {
  app.use('*', (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

module.exports = app;
