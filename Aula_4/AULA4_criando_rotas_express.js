const express= require ('express')
const app= express()
const porta= process.env.PORT 

app.get('/', (requisicao, resposta) =>{
    resposta.send('thiago alexandre guerra')
})
app.get('/canal', (requisicao, resposta) =>{
    resposta.json({canal:'cachorro'})
})
app.listen(porta || 3000 , ()=>{console.log("servidor rodando")})