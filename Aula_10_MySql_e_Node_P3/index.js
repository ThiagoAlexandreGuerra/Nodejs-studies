( async ()=>{
    const aula10= require('./aula10')
    
    console.log("inserir novo cliente")
    await aula10.insere_clientes({nome:'pamela' , idade: 43})

    console.log("realizar update de dados")
    await aula10.atualiza_clientes({nome:'alexandre guerra', idade: 1}, 5)

    console.log("deletar cliente")
    await aula10.deleta_cliente(5)

    console.log("obter todos os clientes")
    const clientes= await aula10.todos_os_clientes()
    console.log(clientes)


})()