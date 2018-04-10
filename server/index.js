const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const config = require ('../config.js');
const bcrypt = require('bcrypt');

let app = express();

app.use(parser.json());
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
  // check that username and password are valid
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
        //
    });
  });
})

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log('got login post')
  // check that username and password are valid
  // look up salt
  let salt = '';
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
      console.err('error logging in', err)
    })
})


let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
