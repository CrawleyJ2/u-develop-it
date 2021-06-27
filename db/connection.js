const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'diehard84',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;