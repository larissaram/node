//Atividade 1 e 2

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-vinde ao meu Site!');
    } else if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Quero morrer de catapora');
    } else if (req.url === '/contato') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Você pode entrar em contato através do e-mail: engs-larissasantos@camporeal.edu.br');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
