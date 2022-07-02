import http from 'http';


http.createServer((req, res) => {

    if(req.method === 'GET' && req.url === "/test")
        res.write("GET /teste executado com sucesso");

    
    res.write("Hello World");
    res.statusCode = 200;
    res.end();

}).listen(8080);