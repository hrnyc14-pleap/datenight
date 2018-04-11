const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');
const helpers = require('./helpers.js');

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

app.get('/amIloggedIn', restrict, (req, res) => {
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
        res.send();
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
  let hashedPassword;
  db.findUser(username)
    .then(dbRes => {
      if (dbRes.length === 0) {
        throw('user does not exist')
      }
      hashedPassword = dbRes[0].password;
      return bcrypt.hash(password, dbRes[0].salt)
    })
    .then((hashResult) => {
      if (hashedPassword !== hashResult) {
        throw('wrong password')
      }
      req.session.regenerate(function(){
        req.session.user = username;
        console.log('authenticated user', username)
        res.status(200).send();
        // res.redirect('/Where');
      });
    })
    .catch(err => {
      console.error('error logging in', err)
      res.status(400).send('error logging in')
    })
})

app.get('/date', (req, res) => {

  let cook = req.body.cook;
  let activity = req.body.activityLevel;
  let genreId = req.body.movieGenre;
  let lat = req.body.latitude;
  let long = req.body.longitude;
  let radius = req.body.radius || 17000;

  if (!cook) {
    if (activity === "") {
      let price = "1,2,3,4";
      let category = "food, restaurants";

      helpers.searchYelp(lat, long, radius, price, category, function(data1){
        helpers.searchMovies(genreId, function(data2){
          let output = {
            yelp: data1,
            movies: data2
          }
          res.status(200).send(output);
        })
      })
    } else if (activity === "mellow") {
      let price = req.body.price;
      let category = "food, restaurants";
      helpers.searchYelp(lat, long, radius, price, category, function(data){
        res.status(200).send(data);
      })
    } else if (activity === "active") {
      let price = req.body.price;
      let category = "arts, active";
      helpers.searchYelp(lat, long, radius, price, category, function(data){
        res.status(200).send(data);
      })
    }
  } else {
    helpers.searchMovies(genreId, function(data){
      res.status(200).send(data);
    })
  }

})




let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
