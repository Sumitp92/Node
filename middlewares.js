const http = require('http');

const express = require('express');
const middlewares = express();

middlewares.use((req, res, next) => {
    console.log("in the middleware!");
    next();
});

middlewares.use((req, res, next) => {
    console.log("in the middleware !");
    res.send("<h1>Hello i am sumit</h1>")
});

const server = http.createServer(middlewares);

server.listen(3000);