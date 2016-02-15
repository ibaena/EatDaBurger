var mysql = require('mysql');
var connection = require('./connection.js');

var orm = {
  selectAll: function() {
    var s = 'select * from burgers';
    connection.query(s, function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  },
  insertOne: function(nameInput, cb) {
    var s = 'INSERT INTO  burgers (name) VALUES (?, ?, ?)';
    connection.query(s, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(input) {
    var s = 'UPDATE burgers SET devoured = true Where ID = ?';
    connection.query(s, [input], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(input) {
    var s = 'DELETE FROM burgers WHERE ID = ?';
    connection.query(s, [input], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
