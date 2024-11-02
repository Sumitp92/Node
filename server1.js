const http = require('http');
const route = require('./route');
const server = http.createServer(route);

server.listen(4000);