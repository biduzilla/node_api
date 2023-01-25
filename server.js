const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Entrei pagina livros',
    '/autores': 'Listagem autores',
    '/helloworld':'Hello world'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url])
})

server.listen(port,()=> {
    console.log(`servidor rodando http://localhost:${port}`)
})