//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

app.get('/hello', function (req, res) {
    console.log('req', req.path)
    res.send('hello')
    // --
});

app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})