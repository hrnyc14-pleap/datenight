DROP DATABASE IF EXISTS datenight;
CREATE DATABASE IF NOT EXISTS datenight;

USE datenight;

DROP TABLES IF EXISTS user;

CREATE TABLE user(
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  salt VARCHAR(255),
  password VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY(user_id)
);

CREATE TABLE movie(
  movie_id INT NOT NULL AUTO_INCREMENT,
  movieName VARCHAR(255),
  genre VARCHAR(255),
  moviePhoto VARCHAR(255),
  PRIMARY KEY(movie_id)
);

CREATE TABLE restaurant(
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  restaurantName VARCHAR(255),
  restaurantPhoto VARCHAR(255),
  price INT,
  PRIMARY KEY(restaurant_id)
);

CREATE TABLE activity(
  activity_id INT NOT NULL AUTO_INCREMENT,
  activityName VARCHAR(255),
  location VARCHAR(255),
  price INT,
  activityPhoto VARCHAR(255),
  PRIMARY KEY(activity_id)
);

CREATE TABLE user_movie(
  user_id INT NOT NULL,
  movie_id INT NOT NULL,
  PRIMARY KEY(user_id, movie_id),
  INDEX (movie_id, user_id)
);

CREATE TABLE user_restaurant(
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  PRIMARY KEY(user_id, restaurant_id),
  INDEX (restaurant_id, user_id)
);

CREATE TABLE user_activity(
  user_id INT NOT NULL,
  activity_id INT NOT NULL,
  PRIMARY KEY(user_id, activity_id),
  INDEX (activity_id, user_id)
);
