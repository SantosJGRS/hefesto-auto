// nesse arquivo, definimos as rotas relacionadas ao relacionamento entre categorias e cupons e associamos cada rota a uma função do CategoriaHasCupomController. As rotas são:
// POST /categoria_has_cupom: para cadastrar um novo relacionamento.
// GET /categoria_has_cupom: para listar todos os relacionamentos.
// GET /categoria_has_cupom/:id: para buscar um relacionamento específico pelo ID.
// PUT /categoria_has_cupom/:id: para atualizar um relacionamento específico pelo ID.
// DELETE /categoria_has_cupom/:id: para excluir um relacionamento específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas ao relacionamento entre categorias e cupons.

const CategoriaHasCupomController = require("../controller/categoria_has_cupom_controller.js");

router.post("/", CategoriaHasCupomController.cadastrar);

router.get("/", CategoriaHasCupomController.listar);

router.get("/:id", CategoriaHasCupomController.buscarPorId);

router.put("/:id", CategoriaHasCupomController.atualizar);

router.delete("/:id", CategoriaHasCupomController.excluir);

module.exports = router;

const categoriaHasCupomRoutes = require("../routes/categoria_has_cupom_routes.js");
app.use("/categoria-has-cupom", categoriaHasCupomRoutes);
