// nesse arquivo, definimos as rotas relacionadas ao relacionamento entre produtos e carrinhos e associamos cada rota a uma função do ProdutoHasCarrinhoController. As rotas são:
// POST /produto_has_carrinho: para cadastrar um novo relacionamento.
// GET /produto_has_carrinho: para listar todos os relacionamentos.
// GET /produto_has_carrinho/:id: para buscar um relacionamento específico pelo ID.
// PUT /produto_has_carrinho/:id: para atualizar um relacionamento específico pelo ID.
// DELETE /produto_has_carrinho/:id: para excluir um relacionamento específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas ao relacionamento entre produtos e carrinhos.

const ProdutoHasCarrinhoController = require("../controller/produto_has_carrinho_controller.js");

router.post("/", ProdutoHasCarrinhoController.cadastrar);

router.get("/", ProdutoHasCarrinhoController.listar);

router.get("/:id", ProdutoHasCarrinhoController.buscarPorId);

router.put("/:id", ProdutoHasCarrinhoController.atualizar);

router.delete("/:id", ProdutoHasCarrinhoController.excluir);

module.exports = router;