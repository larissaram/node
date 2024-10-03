const http = require('http');
const server = http.createServer((requisicao, resposta) => {
    if (requisicao.url.startsWith('/saudacao/')) {
        const nome = requisicao.url.split('/')[2]; 
        const saudacao = `Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`;
        resposta.writeHead(200, { 'Content-Type': 'text/plain' });
        resposta.end(saudacao);

    } else {
        resposta.writeHead(404, { 'Content-Type': 'text/plain' });
        resposta.end('erro');
    }
});

const porta = 3000;
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});