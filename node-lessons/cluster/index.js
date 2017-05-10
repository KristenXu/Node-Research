var express = require('express')
var app = express();
app.listen(3002, function () {
    console.log('子进程开启')
})