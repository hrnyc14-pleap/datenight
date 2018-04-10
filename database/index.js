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
