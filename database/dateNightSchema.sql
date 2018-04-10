DROP DATABASE IF EXISTS datenight;
CREATE DATABASE IF NOT EXISTS datenight;

USE datenight;

DROP TABLES IF EXISTS user;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  salt VARCHAR(255),
  password VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE movie(
  id INT NOT NULL AUTO_INCREMENT,
  movieName VARCHAR(255),
  genre VARCHAR(255),
  moviePhoto VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE restaurant(
  id INT NOT NULL AUTO_INCREMENT,
  restaurantName VARCHAR(255),
  restaurantPhoto VARCHAR(255),
  price INT,
  PRIMARY KEY(id)
);

CREATE TABLE activity(
  id INT NOT NULL AUTO_INCREMENT,
  activityName VARCHAR(255),
  location VARCHAR(255),
  price INT,
  activityPhoto VARCHAR(255)
);
