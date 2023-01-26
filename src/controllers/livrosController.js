import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({
                    mensangem: `${err.message} - falha ao cadastrar livro`
                })
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({
                    mensagem: 'Livro atualizado com sucesso'
                })
            } else {
                res.status(500).send({
                    mensagem: `${err.message} - Error ao atualizar livro`
                })
            }
        })
    }

    static obterLivroId = (req, res) => {
        const id = req.params.id
        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({
                    mensagem: `${err.message} - Error ao procurar livro`
                })
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndRemove(id,(err) => {
            if(err){
                res.status(500).send({
                    mensagem: `${err.message} - Error ao excluir livro`
                })
            }else{
                res.status(200).send({
                    mensagem: "Livro Removido com Sucesso"
                })
            }
        })
    }
}

export default LivroController;