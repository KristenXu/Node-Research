var http = require('http')
http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(3000);

//POST =>req body: Hello World
// res=>
// { 'user-agent': 'curl/7.26.0',
//     host: 'localhost',
//     accept: '*/*',
//     'content-length': '11',
//     'content-type': 'application/x-www-form-urlencoded' }
//
