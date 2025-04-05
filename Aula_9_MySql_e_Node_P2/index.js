( async ()=>{
    const aula9= require('./aula9')
    
    console.log("inserir novo cliente")
    await aula9.insere_clientes({nome:'thiago' , idade: 23})

    console.log("obter todos os clientes")
    const clientes= await aula9.todos_os_clientes()
    console.log(clientes)

})()


