// nesse arquivo, definimos as rotas relacionadas ao relacionamento entre banners e produtos e associamos cada rota a uma função do BannerHasProdutoController. As rotas são:
// POST /banner_has_produto: para cadastrar um novo relacionamento.
// GET /banner_has_produto: para listar todos os relacionamentos.
// GET /banner_has_produto/:id: para buscar um relacionamento específico pelo ID.
// PUT /banner_has_produto/:id: para atualizar um relacionamento específico pelo ID.
// DELETE /banner_has_produto/:id: para excluir um relacionamento específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas ao relacionamento entre banners e produtos.

const BannerHasProdutoController = require("../controller/banner_has_produto_controller.js");

router.post("/", BannerHasProdutoController.cadastrar);

router.get("/", BannerHasProdutoController.listar);

router.get("/:id", BannerHasProdutoController.buscarPorId);

router.put("/:id", BannerHasProdutoController.atualizar);

router.delete("/:id", BannerHasProdutoController.excluir);

module.exports = router;