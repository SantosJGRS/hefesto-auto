// nesse arquivo, definimos as rotas relacionadas ao relacionamento entre categorias e promoções e associamos cada rota a uma função do CategoriaHasPromocaoController. As rotas são:
// POST /categoria_has_promocao: para cadastrar um novo relacionamento.
// GET /categoria_has_promocao: para listar todos os relacionamentos.
// GET /categoria_has_promocao/:id: para buscar um relacionamento específico pelo ID.
// PUT /categoria_has_promocao/:id: para atualizar um relacionamento específico pelo ID.
// DELETE /categoria_has_promocao/:id: para excluir um relacionamento específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas ao relacionamento entre categorias e promoções.

const CategoriaHasPromocaoController = require("../controller/categoria_has_promocao_controller.js");

router.post("/", CategoriaHasPromocaoController.cadastrar);

router.get("/", CategoriaHasPromocaoController.listar);

router.get("/:id", CategoriaHasPromocaoController.buscarPorId);

router.put("/:id", CategoriaHasPromocaoController.atualizar);

router.delete("/:id", CategoriaHasPromocaoController.excluir);

module.exports = router;