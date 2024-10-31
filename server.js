const http = require('http');

const server = http.createServer((req , res) => {
    console.log("Hello Sumit");
    res.end("Hello Sumit");
});

server.listen(4000);