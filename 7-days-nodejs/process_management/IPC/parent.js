var child_process = require('child_process')
var child = child_process.spawn('node', ['child.js'], {
    stdio: [0, 1, 2, 'ipc']
});

child.on('message', function (msg) {
    console.log('parent get call from parent:  ', msg)
})

child.send({hello: 'parent call child:hello'})