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
  console.log('Database deleted successfully');
});

const databaseName = 'test_1';

connection.query(`DROP DATABASE IF EXISTS ${databaseName}`, (error, results) => {
  if (error) {
    console.error('Error creating database:', error);
    return;
  }
  console.log('Database deleted successfully');
});


