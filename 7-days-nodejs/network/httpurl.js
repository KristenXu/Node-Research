var http = require('http')
var url = require('url')
var querystring = require('querystring')
http.createServer(function (request, response) {
    var tmp = request.url; // => "/foo/bar?a=b"
    var parsedUrl = url.parse(tmp);
    console.log('parsedUrl', parsedUrl)
    /* =>
     {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: '?test=11&hh=33&hh=34',
     query: 'test=11&hh=33&hh=34',
     pathname: '/',
     path: '/?test=11&hh=33&hh=34',
     href: '/?test=11&hh=33&hh=34' }
     */
    var queryS = querystring.parse(parsedUrl.query);
    console.log('queryS', queryS)
    /*
     { test: '11', hh: [ '33', '34' ] }
     */
}).listen(3000);