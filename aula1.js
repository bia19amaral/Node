//servidor cod
var http = require('http');
var dia = require("./biblioteca");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h2>Brasil 3 x 0 Suíça</h2> \n');
    res.write('<h2>Brasil 2 x 0 Servia</h2> \n');
    res.write("<p style=color:pink>"+Date().substring(16,24)+"<br>");
    res.write(dia.diaDaSemana()+"</p><br>");
    res.end('Bom dia!');

}).listen(3000);