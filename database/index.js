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
exports.saveMovie = (movieName, moviePhoto) => {
  return connection.query('INSERT IGNORE INTO movie (movieName, moviePhoto) VALUES (?, ?, ?)',
  {replacements: [movieName, moviePhoto], type: 'INSERT'})
}

//save user/movie relationship
exports.saveUserMovie = (username, movieName) => {
  return connection.query(`INSERT INTO user_movie (user_id, movie_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT movie_id FROM movie WHERE movieName='${movieName}'))`)
}

//gets all saved movies
exports.retrieveSavedMovies = (username) => {
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
      return connection.query('SELECT * FROM movie WHERE movie_id= ?',
        {replacements: [movieId.movie_id], type: 'SELECT'});
    }))
  })
  .catch((err)=> {
    console.log('Error retrieving movies', err);
  })
}

//save restaurant to restaurant table
exports.saveRestaurant = (restaurantName, restaurantPhoto, price) => {
  return connection.query('INSERT IGNORE INTO restaurant (restaurantName, restaurantPhoto, price) VALUES (?, ? ,?)',
    {replacements: [restaurantName, restaurantPhoto, price], type: 'INSERT'});
}

//save restaurant/user relationship
exports.saveUserRestaurant = (username, restaurantName) => {
  return connection.query(`INSERT INTO user_restaurant (user_id, restaurant_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT restaurant_id FROM restaurant WHERE restaurantName='${restaurantName}'))`)
}

//gets all saved restaurants
exports.retrieveSavedRestaurants = (username) => {
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
      return connection.query('SELECT * FROM restaurant WHERE restaurant_id= ?', 
        {replacements: [restaurantId.restaurant_id], type: 'SELECT'});
    }))
  })
  .catch((err) => {
    console.log('Error retrieving restaurants', err);
  })
}

//save activity to activity table
exports.saveActivity = (activityName, location, price, activityPhoto) => {
  return connection.query('INSERT IGNORE INTO activity (activityName, location, price, activityPhoto) VALUES (?, ?, ?, ?)',
    {replacements: [activityName, location, price, activityPhoto], type: 'INSERT'})
}

//save activity/user relationship
exports.saveUserActivity = (username, activityName) => {
  return connection.query(`INSERT INTO user_activity (user_id, activity_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT activity_id FROM activity WHERE activityName='${activityName}'))`)
}

//gets all saved activities
exports.retrieveSavedActivities = (username) => {
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
      console.log(activityId)
      return connection.query('SELECT * FROM activity WHERE activity_id=?', 
      {replacements: [activityId.activity_id], type: 'SELECT'});
    }))
  })
  .catch((err) => {
    console.log('Error retrieving activities', err);
  })
}

exports.deleteSavedMovie = (movieName) => {
  return connection.query('SELECT movie_id FROM movie WHERE movieName = ?', {replacements: [movieName], type: 'SELECT'})
  .then((movieId) => {
    return connection.query('DELETE FROM user_movie WHERE movie_id = ?', {replacements: [movieId[0].movie_id], type: 'DELETE'})
  })
  .catch((err) => { 
    console.log('Error in deleting movie', err);
  })
}

exports.deleteSavedRestaurant = (restaurantName) => {
  return connection.query('SELECT restaurant_id FROM restaurant WHERE restaurantName = ?', {replacements: [restaurantName], type: 'SELECT'})
  .then((restaurantId) => {
    return connection.query('DELETE FROM user_restaurant WHERE restaurant_id = ?', {replacements: [restaurantId[0].restaurant_id], type: 'DELETE'})
  })
  .catch((err) => {
    console.log('Error in deleting restaurant', err);
  })
}

exports.deleteSavedActivity = (activityName) => {
  return connection.query('SELECT activity_id FROM activity WHERE activityName = ?', {replacements: [activityName], type: 'SELECT'})
  .then((activityId) => {
    console.log(activityId);
    return connection.query('DELETE FROM user_activity WHERE activity_id = ?', {replacements: [activityId[0].activity_id], type: 'DELETE'})
  })
  .catch((err) => {
    console.log('Error in deleting activity', err)
  })
}