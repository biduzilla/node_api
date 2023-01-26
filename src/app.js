import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, 'Error Conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feito com sucesso");
})

const app = express();

app.use(express.json())

const livros = [
    {
        id: 1,
        "titulo": "Toddy e a carrocinha"
    },
    {
        id: 2,
        "titulo": "Lucky e a amante"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de node')

})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})


app.get('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send({
        mensagem: "Livro Cadastrado"
    })
})

app.put('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo
    res.status(201).json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = buscarLivro(id);
    livros.splice(index, 1)
    res.status(200).send({
        mensagem: "Livro Removido com Sucesso"
    })
})

function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app