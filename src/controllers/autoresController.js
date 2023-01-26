import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({
                    mensangem: `${err.message} - falha ao cadastrar autor`
                })
            } else {
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({
                    mensagem: 'Autor atualizado com sucesso'
                })
            } else {
                res.status(500).send({
                    mensagem: `${err.message} - Error ao atualizar autor`
                })
            }
        })
    }

    static obterAutorById = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({
                    mensagem: `${err.message} - Error ao procurar autor`
                })
            } else {
                res.status(200).send(autores)
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndRemove(id,(err) => {
            if(err){
                res.status(500).send({
                    mensagem: `${err.message} - Error ao excluir autor`
                })
            }else{
                res.status(200).send({
                    mensagem: "Autor Removido com Sucesso"
                })
            }
        })
    }
}

export default AutorController;