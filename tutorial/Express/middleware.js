var express = require('express')
var app = express();
var router = express.Router()

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
//The function is executed every time the app receives a request.
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


// Router level
// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Router Time:', Date.now())
    next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
    // otherwise pass control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    console.log(req.params.id)
    // render a regular page
    res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    res.render('./special.html')
})

// mount the router on the app
app.use('/test_router', router)

app.listen(3000)