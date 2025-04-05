const http= require("http");

http.createServer((requisicao, resposta) =>{
    resposta.writeHead(200, {
        'content-type':'text/plain'
    });
    resposta.write("thiago alexandre guerra")
    resposta.end();

}).listen(1337)