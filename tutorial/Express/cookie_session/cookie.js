var credentials = require('./credentials.js');

var express = require('express');
var app = express();
app.use(require('body-parser')())
app.use(require('cookie-parser')(credentials.cookieSecret));
app.get('/', function (req, res) {
    res.cookie('monster', 'nom nom');
    res.cookie('signed_monster', 'nom nom', { signed: true });
    res.end()
});


app.disable('x-powered-by');
app.listen(3000);