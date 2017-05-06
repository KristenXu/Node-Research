var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var url = require('url');
var eventproxy = require('eventproxy');

var ep = new eventproxy();

var app = express();
var cnodeUrl = 'https://cnodejs.org/';
app.get('/', function (req, res, next) {
    superagent.get(cnodeUrl)
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var topicUrls = [];
            var $ = cheerio.load(sres.text);
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                var href = url.resolve(cnodeUrl, $element.attr('href'));
                topicUrls.push(href);
            });
            concurrentLoad(topicUrls)
            console.log(topicUrls);
        });
});

// ep.all('data1_event', 'data2_event', 'data3_event', function (data1, data2, data3) {
//     var html = fuck(data1, data2, data3);
//     render(html);
// });
//
// $.get('http://data1_source', function (data) {
//     ep.emit('data1_event', data);
// });
//
// $.get('http://data2_source', function (data) {
//     ep.emit('data2_event', data);
// });
//
// $.get('http://data3_source', function (data) {
//     ep.emit('data3_event', data);
// });
var concurrentLoad = function (topicUrls) {

    ep.after('topic_html', topicUrls.length, function (topics) {
        // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair

        // 开始行动
        topics = topics.map(function (topicPair) {
            // 接下来都是 jquery 的用法了
            var topicUrl = topicPair[0];
            var topicHtml = topicPair[1];
            var $ = cheerio.load(topicHtml);
            return ({
                title: $('.topic_full_title').text().trim(),
                href: topicUrl,
                comment1: $('.reply_content').eq(0).text().trim(),
            });
        });

        console.log('final:');
        console.log(topics);
    });

    topicUrls.forEach(function (topicUrl) {
        superagent.get(topicUrl)
            .end(function (err, res) {
                console.log('fetch ' + topicUrl + ' successful');
                ep.emit('topic_html', [topicUrl, res.text]);
            });
    });
}

app.listen(3010, function () {
    console.log('app is listening at port 3010');
});