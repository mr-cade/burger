var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
      },

    insertOne: function(table, burgerName, devoured, callback) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) "
        queryString += "VALUES (?, ?) "

        connection.query(queryString, [table, burgerName, devoured], function(err, result) {
            if (err) {
              throw err;
            }
            callback(result);
          });
    },

    updateOne: function() {
        var queryString = "PUT "

        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            callback(result);
          });
    }
};

module.exports = orm;