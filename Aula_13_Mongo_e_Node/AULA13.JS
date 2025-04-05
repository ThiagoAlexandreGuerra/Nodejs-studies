const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://thiagoalexandre1945:xPPhvRRgdT9HSpvD@cluster0.8axj4.mongodb.net/';

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const dbo = client.db('O_Monitor');
    const obj = { curso: 'Curso de NodeJS', canal: 'CFB Cursos' };
    const colecao = 'cursos';
    
    await dbo.collection(colecao).insertOne(obj);
    console.log('Um novo curso inserido');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);






const url= 'mongodb+srv://thiagoalexandre1945:xPPhvRRgdT9HSpvD@cluster0.8axj4.mongodb.net/' 