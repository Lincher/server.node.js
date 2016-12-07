var http = require("http");
var url = require('url');
var formidable = require('formidable');
function start(route, handle) {
    http.createServer(function(request, response) {
        // var postData ="";
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received.");

        // request.setEncoding('utf8');
        // request.addListener("data", function(postDataChunk) {
        //     postData += postDataChunk;   
        //     console.log("Received POST data chunk '" +    postDataChunk + "'.");
        // })
        // request.addListener('end', function() {
            route(handle, pathname, response,request);
        // })

        // response.writeHead(200, { "Content-Type": "type/plain" });
        // // var content =route(handle,pathname);
        // response.write(route(handle,pathname));
        // response.end();
    }).listen(8888);

    console.log('Server has started.');
}

exports.start = start;