const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');

const config = require ('../config.js');
const db = require('../database/index.js')

let app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// Express sessions
var session = require('express-session')({
  secret: 'keyboard cat',
})
app.use(session)

var restrict = (req, res, next) => {
  console.log('restricting request')
  console.log('session: ', req.session)
  if ((req.session !== undefined) && (req.session.user !== undefined)) {
      console.log('authenticated user ', req.session.user)
      next()
  } else {
      console.log('Errror, auth failed, redirecting to /')
      res.redirect('/')
  }
}

app.get('/users', restrict, (req, res) => {
  res.send('This is the users list (restricted)')
})

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  console.log('signup request', username, password, email);
  // check that username and password are valid
  if (username === null || password === null || email === null) {
    console.log('user fields invalid')
    res.status(400).send('user fields invalid')
  }
  let salt;
  db.findUser(username)
    .then(dbres => {
      // check that username does not already exist
      console.log(dbres)
      if (dbres.length > 0) {
        console.log('username already exists, cannot sign up', username);
        throw('user already exists')
      }
      return bcrypt.genSalt(10);
    })
    .then(saltResult => {
      salt = saltResult;
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      return db.createUser(username, hash, salt, email);
    })
    .then(dbres => {
      return req.session.regenerate((err) => {
        if (err) {
          console.error(err);
        }
        req.session.user = username;
        console.log('successfully signed up', username);
        res.redirect('/users');
      });
    })
    .catch((err) => {
      console.error('error in signup', err);
      res.status(400).send('error signing up')
    })
})

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log('got login post', req.body)
  // check that username and password are valid
  // look up salt
  let salt = 'hi';
  bcrypt.hash(password, salt)
    .then((hash) => {
      return true; // return true if username/password combo is correct
    })
    .then((credentialsAreValid) => {
      req.session.regenerate(function(){
        req.session.user = username;
        console.log('authenticated user', username)
        res.redirect('/');
      });
    }).catch(err => {
      console.error('error logging in', err)
    })
})


let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
