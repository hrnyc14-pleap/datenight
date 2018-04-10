const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const Sequelize = require('sequelize');

const connection = mysql.createConnection(mysqlConfig);
