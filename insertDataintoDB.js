const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'srinu123',
  database: 'test_1' 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

const userData = {
    id:1,
  username: 'john_doe',
  email: 'john@example.com'
};

const insertQuery = 'INSERT INTO Testuser SET ?';

connection.query(insertQuery, userData, (error, results) => {
  if (error) {
    console.error('Error inserting data:', error);
    return;
  }
  console.log('Data inserted successfully');
});

