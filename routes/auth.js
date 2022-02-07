const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const mongoose = require('mongoose');
const userModel = require('../models/User.model');

const minPasswordLength = 4;

/**
 *
 * * All the routes are prefixed with `/api/auth`
 *
 */

router.post('/signup', async (req, res, next) => {
  // ! To use only if you want to enforce strong password (not during dev-time)

  // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  // if (!regex.test(password)) {
  // 	return res
  // 		.status(400)
  // 		.json({
  // 			message:
  // 				"Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
  // 		});
  // }

  // console.log("file ?", req.file);
  // console.log(req.body);
  var errorMsg = '';
  const { name, password, email } = req.body;
  // @todo : best if email validation here or check with a regex in the User model
  if (!password || !email) errorMsg += 'Provide email and password.\n';

  if (password.length < minPasswordLength)
    errorMsg += `Please make your password at least ${minPasswordLength} characters.`;

  if (errorMsg) return res.status(403).json(errorMsg); // 403	Forbidden

  const salt = bcrypt.genSaltSync(10);
  // more on encryption : https://en.wikipedia.org/wiki/Salt_(cryptography)
  const hashPass = bcrypt.hashSync(password, salt);

  const newUser = {
    name,
    email,
    password: hashPass,
  };

  // check if an avatar FILE has been posted
  if (req.file) newUser.avatar = req.file.secure_url;

  userModel
    .create(newUser)
    .then((newUserFromDB) => {
      res.status(200).json({ msg: 'signup ok' });
    })
    .catch((err) => {
      console.log('signup error', err);
      next(err);
    });
});

router.post('/signin', async (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err || !user) return res.status(403).json('invalid user infos'); // 403 : Forbidden

    /**
     * req.Login is a passport method
     * check the doc here : http://www.passportjs.org/docs/login/
     */
    req.login(user, function (err) {
      /* doc says: When the login operation completes, user will be assigned to req.user. */
      if (err) {
        return res.json({ message: 'Something went wrong logging in' });
      }

      // We are now logged in
      // You may find usefull to send some other infos
      // dont send sensitive informations back to the client
      // let's choose the exposed user below
      const { _id, name, email } = user;
      // and only expose non-sensitive inofrmations to the client's state
      // console.log("user", user);
      res.status(200).json({
        currentUser: {
          _id,
          name,
          email,
        },
      });
      next();
    });
  })(req, res, next); // IIFE (module) pattern here (see passport documentation)
});

router.get('/signout', (req, res, next) => {
  req.logout(); // utility function provided by passport
  res.json({ message: 'Success' });
});

router.get('/is-loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    // method provided by passport
    const { _id, name, email } = req.user;
    return res.status(200).json({
      currentUser: {
        _id,
        name,
        email,
      },
    });
  }
  res.status(403).json('Unauthorized');
});

module.exports = router;
