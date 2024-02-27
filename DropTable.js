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
const deleteTableQuery = 'DROP TABLE IF EXISTS Testuser';
connection.query(deleteTableQuery, (error, results) => {
  if (error) {
    console.error('Error deleting table:', error);
    return;
  }
  console.log('Table deleted successfully');
});
