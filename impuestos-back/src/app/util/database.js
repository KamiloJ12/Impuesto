const mysql = require('mysql');

const connection = mysql.createConnection({
<<<<<<< HEAD
    host: process.env.DBHOST,
    user: process.env.DBUSER,
   
    database: process.env.DATABASE
=======
    host: /* process.env.DBHOST */ "localhost",
    user: /* process.env.DBUSER */ "root",
    password: /* process.env.DBPASSWORD */ "root",
    database: /* process.env.DATABASE */ "impuestos"
>>>>>>> eb18b2a2b015ca2664811ce14c42efd558b92516
});

connection.connect( function(err) {
    if (err) {
        console.error(err);
    }else {
        console.log("Connected to database");
    }
    
});

module.exports = connection;