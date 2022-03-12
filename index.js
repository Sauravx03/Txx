var http = require("http");
var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;

var serverapp = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World!!');
    }
});

serverapp.listen(server_port,()=>{
    console.log("Listening to port : "+ server_port);
});