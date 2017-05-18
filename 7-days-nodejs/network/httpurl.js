var http = require('http')
var url = require('url')
var querystring = require('querystring')
http.createServer(function (request, response) {
    var tmp = request.url; // => "/foo/bar?a=b"
    var parsedUrl = url.parse(tmp);
    console.log('parsedUrl', parsedUrl)
    var queryS = querystring.parse(parsedUrl.query);
    console.log('queryS', queryS)
    /* =>
     { protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: '?a=b',
     query: 'a=b',
     pathname: '/foo/bar',
     path: '/foo/bar?a=b',
     href: '/foo/bar?a=b' }
     */
}).listen(3000);