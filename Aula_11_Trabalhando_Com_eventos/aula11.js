const http = require('http')
const eventos= require('events')
const EventoEmissor= new eventos.EventEmitter()

const porta= process.env.PORT || 3000
const retorno=()=>{console.log("servidor rodando")}

EventoEmissor.on('msg',()=>{console.log("cachorro")})
EventoEmissor.on('fim',()=>{console.log("fim do processamento")})
EventoEmissor.on('comeco',()=>{console.log("inicio do processamento")})

const servidor= http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200,{'Content-Type':'text/plain'})
    resposta.write('O Monitor')
    EventoEmissor.emit('comeco')
    EventoEmissor.emit('fim')
    resposta.end()
})

servidor.listen(porta, retorno)