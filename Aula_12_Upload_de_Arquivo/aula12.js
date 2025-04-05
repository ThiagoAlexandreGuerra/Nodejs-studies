const http = require('http');
const fs = require('fs');
const formidavel = require('formidable');

const porta = process.env.PORT || 3000;
retorno = () => {
    console.log("Servidor rodando na porta " + porta);
};

const servidor = http.createServer((requisicao, resposta) => {

    if (requisicao.url == '/envioDeArquivo' && requisicao.method.toLowerCase() == 'post') {
        const form = new formidavel.IncomingForm();

        form.parse(requisicao, (erro, campos, arquivos) => {
            if (erro) {
                resposta.writeHead(500, {'content-type': 'text/plain'});
                resposta.write('Erro ao processar o upload');
                resposta.end();
                return;
            }

            // Depuração: Imprimir o objeto arquivos
            console.log('Arquivos recebidos:', arquivos);

            // Acessar o primeiro item da matriz filetoupload
            const arquivoRecebido = arquivos.filetoupload[0]; // Acessa o primeiro arquivo enviado

            const url_antiga = arquivoRecebido ? arquivoRecebido.filepath : null; // Verifica se arquivoRecebido existe
            const url_nova = arquivoRecebido ? 'C:/Users/thiag/teste4/teste/aprendendo_nodejs/AULA12_upload_de_arquivo/Arquivos_recebidos/' + arquivoRecebido.originalFilename : null;

            if (!url_antiga || !url_nova) {
                resposta.writeHead(400, {'content-type': 'text/plain'});
                resposta.write('Caminho do arquivo não encontrado ou nome inválido');
                resposta.end();
                return;
            }

            fs.rename(url_antiga, url_nova, (erro) => {
                if (erro) {
                    resposta.writeHead(500, {'content-type': 'text/plain'});
                    resposta.write('Erro ao mover o arquivo');
                    resposta.end();
                    return;
                }
                resposta.writeHead(200, {'content-type': 'text/plain'});
                resposta.write('Arquivo movido com sucesso!');
                resposta.end();
            });
        });
    } else {
        resposta.writeHead(200, {'content-type': 'text/html'});
        resposta.write('<form action="/envioDeArquivo" method="post" enctype="multipart/form-data">');
        resposta.write('<input type="file" name="filetoupload"><br>');
        resposta.write('<input type="submit" value="enviar">');
        resposta.write('</form>');
        resposta.end();
    }
});

servidor.listen(porta, retorno);
