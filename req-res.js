const http = require('http');

const server = http.createServer((req , res) =>{
    res.setHeader('content-type' , 'text/html');

    if(req.url ===  '/home'){
        res.end("Welcome home");
    }
    else if(req.url ==='/about'){
        res.end("Welcome to About Us page");
    }
    else if(req.url === '/node'){
        res.end("Welcome to my Node Js project");
    }
    else{
        res.end("error");
    }
});

server.listen(4000);