const express= require('express')
const rotas= express.Router()

let curso_info=[
    {'curso':'node' , 'info':'curso de node'},
    {'curso':'conhecimentosbacarios' , 'info':'curso de conhecimentos bancarios'},
    {'curso':'vendasenegociacao' , 'info':'curso de vendas e negociacao'},
    {'curso':'tecnologia' , 'info':'curso de tecnologia'},
    {'curso':'legislacao' , 'info':'curso de legislacao'},
    {'curso':'matematica' , 'info':'curso de matematica'}
]

rotas.get('/',(requisicao, resposta)=>{
    resposta.json({ola:'ola seja bem vindo'})
})

rotas.get('/:cursoid',(requisicao,resposta)=>{

    const curso= requisicao.params.cursoid
    const curso_informacao=curso_info.find(i => i.curso == curso) 

    if(!curso){

        resposta.status(400).json(
            {erro:'serviço nao encontrado', curso_pesquisado: curso}
        )

    }
    else{
        resposta.status(200).json(curso_informacao)
    }
})

module.exports= rotas