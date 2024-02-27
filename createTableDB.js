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
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS Testuser(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )
`;

connection.query(createTableQuery, (error, results) => {
  if (error) {
    console.error('Error creating table:', error);
    return;
  }
  console.log('Table created successfully');
});


