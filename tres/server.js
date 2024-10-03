const http = require('http');
const { getRandomNumber } = require('./utils'); 
const server = http.createServer((requisicao, resposta) => {
    if (requisicao.url === '/numero') {
        const randomNumber = getRandomNumber(); 
        resposta.writeHead(200, { 'Content-Type': 'text/plain' });
        resposta.end(`Número aleatório: ${randomNumber}`); 
    } else {
        resposta.writeHead(404, { 'Content-Type': 'text/plain' });
        resposta.end('Erro');
    }
});

const porta = 3000; 
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});