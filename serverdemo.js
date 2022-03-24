var http = require('http');
http.createServer(function(req,res)
{
        res.end("<h1>Welcome to Node Js");
}).listen(3000);

console.log("Server is started http://127.0.0.1:3000");
