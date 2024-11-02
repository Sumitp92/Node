const http = require('http');

const express = require('express');
const middlewares = express();

middlewares.use((req,res,next) =>{
    console.log("in the middleware!");
    next();
});

middlewares.use((req , res , next) =>{
    console.log("in the middleware !");
});

const server = http.createServer(middlewares);

server.listen(3000);