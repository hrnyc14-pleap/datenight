const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const Sequelize = require('sequelize');

// connection = mysql.createConnection(mysqlConfig);
connection = new Sequelize('datenight', 'root', '', mysqlConfig)

exports.connection = connection

exports.createUser = (username, password, salt, email) => {
  return connection.query('INSERT INTO user (username, password, salt, email) VALUES (?, ?, ?, ?)',
    {replacements: [username, password, salt, email], type: 'INSERT'});
}

exports.findUser = (username) => {
  return connection.query('SELECT * FROM user WHERE username = ?',
    {replacements: [username], type: 'SELECT'});
}

exports.saveMovie = (movieName, genre, moviePhoto) => {
  return connection.query('INSERT INTO movie (movieName, genre, moviePhoto) VALUES (?, ?, ?)',
    {replacements: [movieName, genre, moviePhoto], type: 'INSERT'})
}

//gets all favorited movies
exports.retrieveFavoriteMovies = (username) => {
  return exports.findUser(username)
  .then((dbResults) {
    if (dbResults.length === 0) {
      throw error('user not found ')
    }
    let index = dbresults[0].user_id
    return connection.query('SELECT movie_id FROM user_movie WHERE user_id= ?',
      {replacements: [index], type: 'SELECT'})
  })
  .then((movieIds)=> {
    return Promise.all(return movieIds.map((movieId)=> {
      connection.query('SELECT * FROM movie WHERE movie_id= ?',
        {replacements: movie_id, type: 'SELECT'})
      })
    )
  })
  .catch((err)=> {
    console.log('Error retrieving movies', err)
  })
}

exports.saveRestaurant = (restaurant, restaurantName, price) => {
  return connection.query('INSERT INTO restaurant (restaurant, restaurantName, price) VALUES (?, ? ,?)',
    {replacements: [restaurant, restaurantName, price], type: 'INSERT'})
}

//gets all favorited restaurants
exports.retrieveFavoriteRestaurants = (user_id) => {
  return connection.query('SELECT * FROM user_restaurant WHERE id= ?',
    {replacements: [user_id], type: 'SELECT'})
}

exports.saveActivity = (activityName, location, price, activityPhoto) => {
  return connection.query('INSERT INTO activity (activityName, location, price, activityPhoto)',
    {replacements: [activityName, location, price, activityPhoto], type: 'INSERT'})
}

//getes all favorite activities
exports.retrieveFavoriteActivities = (user_id) => {
  return connection.query('SELECT * FROM user_activity WHERE id= ?',
    {replacements: [user_id], type: 'SELECT'})
}
