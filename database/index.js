const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const Sequelize = require('sequelize');

// connection = mysql.createConnection(mysqlConfig);
connection = new Sequelize('datenight', 'root', '', mysqlConfig);

exports.connection = connection;

//adds new user to db
exports.createUser = (username, password, salt, email) => {
  return connection.query('INSERT INTO user (username, password, salt, email) VALUES (?, ?, ?, ?)',
    {replacements: [username, password, salt, email], type: 'INSERT'});
}

//find user by username
exports.findUser = (username) => {
  return connection.query('SELECT * FROM user WHERE username = ?',
    {replacements: [username], type: 'SELECT'});
}

//save move to movie table
exports.saveMovie = (movieName, moviePhoto) => {
  return connection.query('INSERT IGNORE INTO movie (title, poster_path) VALUES (?, ?)',
  {replacements: [movieName, moviePhoto], type: 'INSERT'})
}

//save user/movie relationship to user_movie relational table
exports.saveUserMovie = (username, movieName) => {
  return connection.query(`INSERT INTO user_movie (user_id, movie_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT movie_id FROM movie WHERE title='${movieName}'))`)
}

//gets all saved movies for a specific user
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
  return connection.query('INSERT IGNORE INTO restaurant (name, image_url, price) VALUES (?, ? ,?)',
    {replacements: [restaurantName, restaurantPhoto, price], type: 'INSERT'});
}

//save restaurant/user relationship to user_restaurant relational table
exports.saveUserRestaurant = (username, restaurantName) => {
  return connection.query(`INSERT INTO user_restaurant (user_id, restaurant_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT restaurant_id FROM restaurant WHERE name='${restaurantName}'))`)
}

//gets all saved restaurants for specific user
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
exports.saveActivity = (activityName, activityPhoto) => {
  return connection.query('INSERT IGNORE INTO activity (name, image_url) VALUES (?, ?)',
    {replacements: [activityName, activityPhoto], type: 'INSERT'})
}

//save activity/user relationship to user_activity relational table
exports.saveUserActivity = (username, activityName) => {
  return connection.query(`INSERT INTO user_activity (user_id, activity_id) VALUES ((SELECT user_id FROM user WHERE username='${username}'), 
  (SELECT activity_id FROM activity WHERE name='${activityName}'))`)
}

//gets all saved activities for specific user
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

//remove user/movie relationship from relational table (NOT deleting movie from movies table)
exports.deleteSavedMovie = (movieName) => {
  return connection.query('SELECT movie_id FROM movie WHERE title = ?', {replacements: [movieName], type: 'SELECT'})
  .then((movieId) => {
    return connection.query('DELETE FROM user_movie WHERE movie_id = ?', {replacements: [movieId[0].movie_id], type: 'DELETE'})
  })
  .catch((err) => { 
    console.log('Error in deleting movie', err);
  })
}

//remove user/restaurant relationship from relational table (NOT deleting restaurant from restaurant table)
exports.deleteSavedRestaurant = (restaurantName) => {
  return connection.query('SELECT restaurant_id FROM restaurant WHERE name = ?', {replacements: [restaurantName], type: 'SELECT'})
  .then((restaurantId) => {
    return connection.query('DELETE FROM user_restaurant WHERE restaurant_id = ?', {replacements: [restaurantId[0].restaurant_id], type: 'DELETE'})
  })
  .catch((err) => {
    console.log('Error in deleting restaurant', err);
  })
}

//remove user/activity relationship from relational table (NOT deleting activity from activity table)
exports.deleteSavedActivity = (activityName) => {
  return connection.query('SELECT activity_id FROM activity WHERE name = ?', {replacements: [activityName], type: 'SELECT'})
  .then((activityId) => {
    console.log(activityId);
    return connection.query('DELETE FROM user_activity WHERE activity_id = ?', {replacements: [activityId[0].activity_id], type: 'DELETE'})
  })
  .catch((err) => {
    console.log('Error in deleting activity', err)
  })
}