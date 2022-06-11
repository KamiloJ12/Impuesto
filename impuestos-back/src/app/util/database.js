const mysql = require('mysql');

const connection = mysql.createConnection({
    host: /* process.env.DBHOST */ "localhost",
    user: /* process.env.DBUSER */ "root",
    password: "root",
    database: /* process.env.DATABASE */ "impuestos"
});

connection.connect( function(err) {
    if (err) {
        console.error(err);
    }else {
        console.log("Connected to database");
    }
    
});

module.exports = connection;