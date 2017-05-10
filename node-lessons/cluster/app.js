var cluster = require('cluster');
var os = require('os');

const CPUS = os.cpus();

if (cluster.isMaster) {
    CPUS.forEach(function () {
        cluster.fork();
    });
    cluster.on('listening', function(worker) {
        console.log('Cluster %d connected', worker.process.pid);
    });

    cluster.on('disconnect', function(worker) {
        console.log('Cluster %d disconnected', worker.process.pid);
    });

    cluster.on('exit', function(worker) {
        console.log('Cluster %d dead', worker.process.pid);
        // Ensuring a new cluster will start if an old one dies
        cluster.fork();
    });
} else {
    require("./index.js");
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