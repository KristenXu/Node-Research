var cluster = require('cluster');
var http = require('http');
var os = require('os');
const CPUS = os.cpus();
console.log('CPUS', CPUS.length)

if (cluster.isMaster) {
    CPUS.forEach(function () {
        cluster.fork();
    });
    cluster.on('listening', function(worker, address) {
        console.log(address)
        console.log('worker %d connected', worker.process.pid, ' , address: ' + address.address, ' , port: ' + address.port);
    });

    cluster.on('disconnect', function(worker, address) {
        console.log('worker %d disconnected', worker.process.pid, ' , port: ' + address.port);
    });


    cluster.on('exit', function(worker) {
        console.log('worker %d dead', worker.process.pid);
        // Ensuring a new cluster will start if an old one dies
        cluster.fork();
    });
} else {
    console.log('[worker] ' + "start worker ..." + cluster.worker.id);
    http.createServer(function (req, res) {
        console.log('worker'+cluster.worker.id);
        res.end('worker'+cluster.worker.id+',PID:'+process.pid);
    }).listen(3002);
}

/**
 * pm2:
 * pm2 start filename
 * pm2 stop all
 * pm2 list
 * pm2 restart all
 * pm2 stop [app-name|id]  #停止某一个进程，可以使用app-name或者id
 * pm2 delete [app-name|id]#删除并停止进程
 * pm2 logs
 * pm2 web
 * pm2 monit 涉及重启次数、运行时间、脚本路径、参数、日志路径、运行模式等等信息
 * **/

/**
 *
 *node server.js > server.log
 * siege -c 50 http://localhost:3000 运行siege启动命令进行压力测试,每秒50个并发请求。
 * ~ R
 > df<-read.table(file="server.log",skip=20,header=FALSE)
 > summary(df)
 **/