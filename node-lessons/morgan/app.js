//生成日志
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var app = express();

app.use(morgan('common'));
app.use(cors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Conten-Type', 'Authorization']
}));

app.get('/', function(req, res) {
    res.json({status: 'My Api is alive!'});
});

app.listen(3000, function() {
    console.log('3000  My Api is running...');
});

app.listen(3001, function() {
    console.log('3001  My Api is running...');
});

module.exports = app;  