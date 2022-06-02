const mysql = require('mysql');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: '4Un1qu3PassWord!!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;