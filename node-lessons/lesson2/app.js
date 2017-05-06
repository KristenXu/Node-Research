var express = require('express');
var ultility = require('utility');

var app = express();

app.get('/', function (req, res) {
   var q = req.query.q;
   console.log('q: ', q);
   res.send(q)
});

app.listen(3010, function (req, res) {
    console.log('app is running at port 3010');
})