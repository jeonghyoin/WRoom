var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.30.54',
    user     : 'dana',
    password : 'dana1234!',
    database : 'wroom'
});

module.exports = connection;