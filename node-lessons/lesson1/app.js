var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Helllo World!')
});

app.listen(3010, function () {
    console.log('app is listening at port 3010');
})