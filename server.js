var http = require('http');
var fs = require('fs');
/*firesystem*/

http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text.html'});
        res.write(data);
        return res.end();
    });    
}).listen(80);