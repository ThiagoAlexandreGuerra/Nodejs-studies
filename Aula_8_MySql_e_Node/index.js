const express= require('express')
const rotas = require('./rotas')

const porta= process.env.PORT || 3000

const app= express()

app.use('/', rotas)

app.get('*',(requisicao , resposta)=>{
    resposta.send('o monitor')

})

app.listen(porta,()=>{console.log("servidor rodando")})