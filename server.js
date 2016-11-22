var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"type/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);