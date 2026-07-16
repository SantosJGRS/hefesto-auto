// nesse arquivo, definimos as rotas relacionadas aos produtos e associamos cada rota a uma função do ProdutoController. As rotas são:
// POST /produto: para cadastrar um novo produto.
// GET /produto: para listar todos os produtos.
// GET /produto/:id: para buscar um produto específico pelo ID.
// PUT /produto/:id: para atualizar as informações de um produto específico pelo ID.
// DELETE /produto/:id: para excluir um produto específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos produtos.

const ProdutoController = require("../controller/produto_controller.js");

router.post("/", ProdutoController.cadastrar);

router.get("/", ProdutoController.listar);

router.get("/:id", ProdutoController.buscarPorId);

router.put("/:id", ProdutoController.atualizar);

router.delete("/:id", ProdutoController.excluir);

module.exports = router;