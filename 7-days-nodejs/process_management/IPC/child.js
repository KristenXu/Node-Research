process.on('message', function (msg) {
    console.log('child get call from parent:', msg.hello)
    msg.hello = msg.hello.toUpperCase();
    process.send('child call parent')
})