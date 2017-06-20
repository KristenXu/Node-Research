var express = require('express');
var app = express();
app.use(require('body-parser')());
var staff = {
    portland: {
        mitch: {
            bio: 'Mitch is the man to have at your back.'
        },
        madeline: {
            bio: 'Madeline is our Oregon expert.'
        },
    },
    bend: {
    },
};
app.get('/staff/:city/:name', function(req, res){
    var info = staff[req.params.city][req.params.name];
    if(!info) return next(); // 最终将会落入 404 res.render('staffer', info);
});

app.disable('x-powered-by');
app.listen(3000)