var url = require('http');
var adr = 'http://localhost:8080/index.html?ano=2017&mes=dezembro';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log("Brasil 5x1 Croácia")
var qdata = q.query;
console.log(qdata.mes);
