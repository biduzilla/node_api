import express from "express";

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

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send({
        mensagem: "Livro Cadastrado"
    })
})

export default app