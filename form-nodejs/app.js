const http = require('http');
let fs  = require('fs');
let server = http.createServer( function(req,res){
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return
        }
        res.writeHead(200);
        res.end(data);
});
server.listen(8080);

