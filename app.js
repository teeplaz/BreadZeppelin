var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");


var app = express();
var PORT = process.env.PORT || 3000;

// var app = connection = mysql.createConnection ({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "root",
//     database: "restaurant_db"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected! Listening on port 3306!");
//     afterConnection();
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
