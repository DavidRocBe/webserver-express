const htttp = require('http');

htttp.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'David',
        edad: 26,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escichando el puerto 8080');