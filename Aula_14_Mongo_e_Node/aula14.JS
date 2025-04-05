const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://thiagoalexandre1945:xPPhvRRgdT9HSpvD@cluster0.8axj4.mongodb.net/';

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const dbo = client.db('O_Monitor');
    const obj = { curso: 'Curso de NodeJS', canal: 'CFB Cursos' };
    const colecao = 'cursos';

    // Encontrando o primeiro documento da coleção
    const resultado = await dbo.collection(colecao).find({}).toArray((erro, resposta)=>{
      if(erro) throw erro
      console.log(resultado)
    });
    console.log(resultado); // Exibe o resultado encontrado ou `null`
    
  } catch (erro) {
    console.error("Erro durante a execução:", erro);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
