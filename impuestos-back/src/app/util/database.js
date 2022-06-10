const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
   
    database: process.env.DATABASE
});

connection.connect( function(err) {
    if (err) {
        console.error(err);
    }else {
        console.log("Connected to database");
    }
    
});

module.exports = connection;