const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const Sequelize = require('sequelize');

// connection = mysql.createConnection(mysqlConfig);
connection = new Sequelize('datenight', 'root', '', mysqlConfig);

exports.connection = connection;

exports.createUser = (username, password, salt, email) => {
  return connection.query('INSERT INTO user (username, password, salt, email) VALUES (?, ?, ?, ?)',
    {replacements: [username, password, salt, email], type: 'INSERT'});
}

exports.findUser = (username) => {
  return connection.query('SELECT * FROM user WHERE username = ?',
    {replacements: [username], type: 'SELECT'});
}

//save move to movie table
exports.saveMovie = (username, movieName, genre, moviePhoto) => {
  return connection.query('INSERT INTO movie (movieName, genre, moviePhoto) VALUES (?, ?, ?)',
  {replacements: [movieName, genre, moviePhoto], type: 'INSERT'})
}

//save user/movie relationship
exports.saveUserMovie = (username, movieName) => {
  return connection.query(`INSERT INTO user_movie (user_id, movie_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT movie_id FROM movie WHERE movieName='${movieName}'))`)
}

//gets all favorited movies
exports.retrieveFavoriteMovies = (username) => {
  return exports.findUser(username)
  .then((dbResults) => {
    if (dbResults.length === 0) {
      throw error('user not found');
    }
    let index = dbResults[0].user_id;
    return connection.query('SELECT movie_id FROM user_movie WHERE user_id= ?',
      {replacements: [index], type: 'SELECT'});
  })
  .then((movieIds) => {
    return Promise.all(movieIds.map((movieId)=> {
      connection.query('SELECT * FROM movie WHERE movie_id= ?',
        {replacements: movieId, type: 'SELECT'});
    }))
  })
  .catch((err)=> {
    console.log('Error retrieving movies', err);
  })
}

//save restaurant to restaurant table
exports.saveRestaurant = (restaurantName, restaurantPhoto, price) => {
  return connection.query('INSERT INTO restaurant (restaurantName, restaurantPhoto, price) VALUES (?, ? ,?)',
    {replacements: [restaurantName, restaurantPhoto, price], type: 'INSERT'});
}

//save restaurant/user relationship
exports.saveUserRestaurant = (username, restaurantName) => {
  return connection.query(`INSERT INTO user_restaurant (user_id, restaurant_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT restaurant_id FROM restaurant WHERE restaurantName='${restaurantName}'))`)
}

//gets all favorited restaurants
exports.retrieveFavoriteRestaurants = (username) => {
  return exports.findUser(username)
  .then((dbResults) => {
    if (dbResults.length === 0) {
      throw error ('user not found');
    }
    let index = dbResults[0].user_id;
    return connection.query('SELECT restaurant_id FROM user_restaurant WHERE user_id= ?',
      {replacements: [index], type: 'SELECT'});
  })
  .then((restaurantIds) => {
    return Promise.all(restaurantIds.map((restaurantId) => {
      connection.query('SELECT * FROM restaurant WHERE restaurant_id= ?', 
        {replacements: [restaurantId], type: 'SELECT'});
    }))
  })
  .catch((err) => {
    console.log('Error retrieving restaurants', err);
  })
}

//save activity to activity table
exports.saveActivity = (activityName, location, price, activityPhoto) => {
  return connection.query('INSERT INTO activity (activityName, location, price, activityPhoto) VALUES (?, ?, ?, ?)',
    {replacements: [activityName, location, price, activityPhoto], type: 'INSERT'})
}

//save activity/user relationship
exports.saveUserActivity = (username, activityName) => {
  return connection.query(`INSERT INTO user_activity (user_id, activity_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT activity_id FROM activity WHERE activityName='${activityName}'))`)
}

//gets all favorite activities
exports.retrieveFavoriteActivities = (username) => {
  return exports.findUser(username)
  .then((dbResults) => {
    if (dbResults.length === 0) {
      throw error ('user not found');
    }
    let index = dbResults[0].user_id;
    return connection.query('SELECT activity_id FROM user_activity WHERE user_id= ?',
      {replacements: [index], type: 'SELECT'});
  })
  .then((activityIds) => {
    return Promise.all(activityIds.map((activityId) => {
      connection.query('SELECT * FROM activity WHERE activity_id=?', 
      {replacements: [activityId], type: 'SELECT'});
    }))
  })
  .catch((err) => {
    console.log('Error retrieving activities', err);
  })
}
