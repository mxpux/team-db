'use strict';
const util = require('util');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    // Your username
    user: 'root',
    // Your password
    password: 'hello',
    database: 'Employee_Tracker'
});
connection.connect();
// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);
module.exports = connection;