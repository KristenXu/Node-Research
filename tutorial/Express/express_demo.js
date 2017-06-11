//express_demo.js 文件
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var fs = require("fs");
var multer  = require('multer');
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(multer({ dest: '/tmp/'}).array('image'));
app.get('/', function (req, res) {
    res.send('Hello World');
    console.log("Cookies: ", req.cookies)
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
app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.header("Content-Type", "application/json; charset=utf-8");
            res.end( JSON.stringify( response ) );
        });
    });
})