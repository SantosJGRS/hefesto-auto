// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do AvaliacaoProdutoController. As rotas são:
// POST /avaliacao_produto: para cadastrar uma nova avaliação.
// GET /avaliacao_produto: para listar todas as avaliações.
// GET /avaliacao_produto/:id: para buscar uma avaliação específica pelo ID.
// PUT /avaliacao_produto/:id: para atualizar as informações de uma avaliação específica pelo ID.
// DELETE /avaliacao_produto/:id: para excluir uma avaliação específica pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às avaliações de produtos.

const AvaliacaoProdutoController = require("../controller/avaliacao_produto_controller.js");

router.post("/", AvaliacaoProdutoController.cadastrar);

router.get("/", AvaliacaoProdutoController.listar);

router.get("/:id", AvaliacaoProdutoController.buscarPorId);

router.put("/:id", AvaliacaoProdutoController.atualizar);

router.delete("/:id", AvaliacaoProdutoController.excluir);

module.exports = router;

const clienteRoutes = require("../routes/cliente_routes.js");
app.use("/clientes", clienteRoutes);

const avaliacaoRoutes = require("../routes/avaliacao_produto_routes.js");
app.use("/avaliacoes", avaliacaoRoutes);