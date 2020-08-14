var express = require("./connection.js");

var orm = {
    selectAll: function(input, cb) {
        var queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    insertOne: function() {

    },

    updateOne: function() {

    }
};

module.exports = orm;