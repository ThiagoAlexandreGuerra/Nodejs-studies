const  http= require ('http')
const porta = 3000
const host= '127.0.0.1'
const url= require( 'url')

const servidor = http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, { 'content-type':'text/html'})

    resposta.write(requisicao.url)
    const parametro=url.parse(requisicao.url,true).query
    resposta.write('<br/>' + parametro.nome)
    resposta.write('<br/>' + parametro.curso)
    resposta.end()
});

servidor.listen(porta, host, ()=>{console.log("servidor rodando")});