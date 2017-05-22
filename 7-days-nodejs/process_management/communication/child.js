process.on('SIGTERM', function () {
    clearUp();
    process.exit(0)
})