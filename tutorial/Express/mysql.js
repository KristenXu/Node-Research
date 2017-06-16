var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'chainn',
    password : '123456',
    database: 'express_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT * FROM USERS AS solution', function(err, rows, fields) {
    console.log('rows: ', rows)
    console.log('fields: ', fields)
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

connection.end();