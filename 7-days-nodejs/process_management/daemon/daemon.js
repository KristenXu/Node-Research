var child_process = require('child_process')
function spawn(mainModule) {
    var worker = child_process.spawn('node', [ mainModule ]);

    worker.on('exit', function (code) {
        if (code !== 0) {
            console.log('worker!');
            spawn(mainModule);
        }
    });
}

spawn('worker.js');