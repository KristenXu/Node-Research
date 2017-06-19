var express = require('express');
var app = express();

app.get('/test_header/:id', function (req, res) {
    console.log('req', req)
    res.set('Content-Type', 'text/plain');
    var s = '';
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s)
});
app.disable('x-powered-by');
app.listen(3000)