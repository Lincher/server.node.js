var server = require('./server');
var router = require('./router');
var requstHandlers = require('./requestHandlers');
var handle ={}
handle['/'] = requstHandlers.index;
handle['/start']=requstHandlers.start;
handle['/upload']=requstHandlers.upload;
handle['/show']=requstHandlers.show;
server.start(router.route,handle);