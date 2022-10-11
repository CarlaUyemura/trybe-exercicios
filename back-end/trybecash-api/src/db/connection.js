const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 33050,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;