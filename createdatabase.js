const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'srinu123'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

const databaseName = 'test_1';

connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (error, results) => {
  if (error) {
    console.error('Error creating database:', error);
    return;
  }
  console.log('Database created successfully');
});


