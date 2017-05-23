function main(callback) {
    // Do something.
    asyncA(function (err, data) {
        if (err) {
            callback(err);
        } else {
            // Do something
            asyncB(function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    // Do something
                    asyncC(function (err, data) {
                        if (err) {
                            callback(err);
                        } else {
                            // Do something
                            callback(null);
                        }
                    });
                }
            });
        }
    });
}

main(function (err) {
    if (err) {
        // Deal with exception.
    }
});