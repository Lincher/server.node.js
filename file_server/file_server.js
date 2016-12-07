'use strict';

var fs = require('fs');
var url = require('url');
var path = require('path');
var http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir:' + root);

var server = http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;

    var filepath = path.join(root, pathname);

    var notfound = () => {
        console.log('404' + request.url);

        response.writeHead(404);
        response.end('404 Not Found');
    };

    fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
            console.log('200' + request.url);

            response.writeHead(200);

            fs.createReadStream(filepath).pipe(response);
        } else if (!err && stats.isDirectory()) {
            console.log('200' + request.url);

            var index = path.join(root, pathname, 'index.html');

            var _default = path.join(root, pathname, 'default.html');

            fs.exists(index, (exists) => {
                if (exists) {
                    response.writeHead(200);
                    fs.createReadStream(index).pipe(response);

                } else {

                    fs.exists(_default, (exists) => {
                        if (exists) {
                            response.writeHead(200);

                            fs.createReadStream(_default).pipe(response);

                        } else {
                            notfound();
                        }
                    });
                }
            });
        } else {
            notfound();
        }
    });
});

server.listen(8888);

console.log('server is running at http://127.0.0.1:8888/');