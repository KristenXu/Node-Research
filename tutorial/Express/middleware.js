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

// Application level
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})
// The function is executed for any type of HTTP request on the /user/:id path.
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})
//The function handles GET requests to the /user/:id path.
app.get('/user/:id', function (req, res, next) {
    res.send('USER')
})

app.listen(3000)