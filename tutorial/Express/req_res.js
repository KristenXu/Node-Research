var express = require('express');
var app = express();
app.use(require('body-parser')());
app.get('/test_header/:id', function (req, res) {
    console.log('req', req)
    res.set('Content-Type', 'text/plain');
    var s = '';
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s)
});

app.post('/process_post', function (req, res) {
    console.log('body', req.body);
    res.send('post succeed!')
});


//without bodyparser
// app.post('/process_post', function (req, res) {
//     console.log('body', req.body);
//     var data = ""
//     req.on('data', function(chunk){ data += chunk})
//     req.on('end', function(){
//         console.log('sss', data)
//     })
//     res.send('post succeed!')
// });
app.disable('x-powered-by');
app.listen(3000)