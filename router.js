var fs = require('fs');

function route(handle, pathname, response, request) {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, request);
    } 
    else if (pathname.indexOf(".js")>-1) {
        js_route(pathname,response);
    } 
    else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 not found");
        response.end();
    }
}


function js_route(route,response){
    fs.readFile("."+route, (error, file) => {
            if (error) {   
                response.writeHead(500, { "Content-Type": "text/plain" });   
                response.write(error + "\n");   
                response.end();  
            } else {   
                response.writeHead(200, { "Content-Type": "text/html" });   
                response.write(file);   
                response.end();  
            }
        });
}

exports.route = route;