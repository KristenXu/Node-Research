var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function (req, res) {
    console.log('req', req.method)
    switch (req.method)
    {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function (chunk) {
                console.log('chunk', chunk)
                item += chunk;
            })
            req.on('end', function () {
                items.push(item);
                console.log('items', items)
                res.end(items + '\n' +'OK\n');
            });
            break;
    }
});
server.listen(3003);