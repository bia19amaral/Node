var fs = require('fs');

fs.appendFile('novoArquivo.txt', 'Texto: que vai aparecer dentro do arquivo', 
    function(err){
    if (err) throw err;
    console.log('Arquivo criado...');
});