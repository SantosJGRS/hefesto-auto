// nesse arquivo, definimos as rotas relacionadas ao relacionamento entre produtos e promoções e associamos cada rota a uma função do ProdutoHasPromocaoController. As rotas são:
// POST /produto_has_promocao: para cadastrar um novo relacionamento.
// GET /produto_has_promocao: para listar todos os relacionamentos.
// GET /produto_has_promocao/:id: para buscar um relacionamento específico pelo ID.
// PUT /produto_has_promocao/:id: para atualizar um relacionamento específico pelo ID.
// DELETE /produto_has_promocao/:id: para excluir um relacionamento específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas ao relacionamento entre produtos e promoções.

const ProdutoHasPromocaoController = require("../controller/produto_has_promocao_controller.js");

router.post("/", ProdutoHasPromocaoController.cadastrar);

router.get("/", ProdutoHasPromocaoController.listar);

router.get("/:id", ProdutoHasPromocaoController.buscarPorId);

router.put("/:id", ProdutoHasPromocaoController.atualizar);

router.delete("/:id", ProdutoHasPromocaoController.excluir);

module.exports = router;

const produtoHasPromocaoRoutes = require("../routes/produto_has_promocao_routes.js");
app.use("/produto-has-promocao", produtoHasPromocaoRoutes);