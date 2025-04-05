const conectar_com_mysql_dados = async () => {
    if (global.conexao && global.conexao.state !== 'disconnected') {
        return global.conexao;
    }
    
    const mysql = require('mysql2/promise');
    try {
        const conecta = await mysql.createConnection("mysql://root:T6A9A6p7*@localhost:3306/aprendendo_sql");
        console.log("Conexão criada com sucesso.");
        global.conexao = conecta;
        return conecta;
    } catch (error) {
        console.error("Erro ao criar conexão com o banco de dados:", error);
        throw error;
    }
};

const todos_os_clientes = async () => {
    const conecta = await conectar_com_mysql_dados();
    const [linhas] = await conecta.query('SELECT * FROM cliente_node');
    return linhas;
};

const insere_clientes = async (cliente) => {
    const conecta = await conectar_com_mysql_dados();
    const insert_cliente = 'INSERT INTO cliente_node (nome_cliente, idade) VALUES (?, ?)';
    const valores = [cliente.nome, cliente.idade];

    try {

        await conecta.query(insert_cliente, valores);
        console.log("Cliente inserido com sucesso.");

    } catch (error) {

        console.error("Erro ao inserir cliente:", error);
        throw error;

    }
};

const atualiza_clientes= async (cliente , id )=>{

    const conecta= await conectar_com_mysql_dados()
    const update_cliente= 'UPDATE cliente_node SET nome_cliente = ? , idade = ?  WHERE i_cliente_cliente = ?;'
    const update= [cliente.nome , cliente.idade , id]

    try{

        await conecta.query(update_cliente,update);
        console.log("cliente atualizado com sucesso");

    } catch (error){

        console.error("erro ao realizar o update");
        throw error;

    }
};

const deleta_cliente= async (id) =>{

    const conecta = await conectar_com_mysql_dados()
    const delete_query_in_mysql='DELETE FROM cliente_node WHERE i_cliente_cliente =? ;'
    const deleta= [id]

    try{

        await conecta.query(delete_query_in_mysql, deleta)
        console.log("cliente deletado com sucesso")

    } catch(error){

        console.error("erro ao deletar cliente")
        throw error
    }
}

module.exports = {
    todos_os_clientes,
    insere_clientes,
    atualiza_clientes,
    deleta_cliente
};
