DROP DATABASE IF EXISTS datenight;
CREATE DATABASE IF NOT EXISTS datenight;

USE datenight;

DROP TABLES IF EXISTS user;

CREATE TABLE user(
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  salt VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY(user_id)
);

CREATE TABLE movie(
  movie_id INT NOT NULL AUTO_INCREMENT,
  movieName VARCHAR(255) UNIQUE,
  moviePhoto VARCHAR(255),
  PRIMARY KEY(movie_id)
);

CREATE TABLE restaurant(
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  restaurantName VARCHAR(255) UNIQUE,
  restaurantPhoto VARCHAR(255),
  price INT,
  PRIMARY KEY(restaurant_id)
);

CREATE TABLE activity(
  activity_id INT NOT NULL AUTO_INCREMENT,
  activityName VARCHAR(255) UNIQUE,
  location VARCHAR(255),
  price INT,
  activityPhoto VARCHAR(255),
  PRIMARY KEY(activity_id)
);

CREATE TABLE user_movie(
  user_id INT NOT NULL,
  movie_id INT NOT NULL,
  PRIMARY KEY(user_id, movie_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (movie_id) REFERENCES movie (movie_id)
);

CREATE TABLE user_restaurant(
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  PRIMARY KEY(user_id, restaurant_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id)
);

CREATE TABLE user_activity(
  user_id INT NOT NULL,
  activity_id INT NOT NULL,
  PRIMARY KEY(user_id, activity_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (activity_id) REFERENCES activity (activity_id)
);

