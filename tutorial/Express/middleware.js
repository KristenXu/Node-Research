var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log('get timestamp')
    next()
}

app.use(requestTime)

app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    console.log('route /')
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

app.listen(3000)