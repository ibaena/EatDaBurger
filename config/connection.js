var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@pril2488',
  database: 'eat_burger'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected...');
});
