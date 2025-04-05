const http= require('http')
const fs= require ('fs')
const porta= process.env.PORT 

const server= http.createServer((requisicao, resposta) => {
    fs.readFile('AULA5.html', (erro, arquivo)=>{
        resposta.writeHead(200,{'Content-Type':'text/html'})
        resposta.write(arquivo)
        return resposta.end()
    })
})

server.listen(porta || 3000 , ()=>{console.log("servidor rodando")})