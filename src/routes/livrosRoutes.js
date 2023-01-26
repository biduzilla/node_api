import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router.get('/livros',LivroController.listarLivros)

router.post('/livros', LivroController.cadastrarLivro)

router.put('/livros/:id', LivroController.atualizarLivro)

router.get('/livros/:id',LivroController.obterLivroId)

export default router;