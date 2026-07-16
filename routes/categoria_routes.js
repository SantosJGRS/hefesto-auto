// nesse arquivo, definimos as rotas relacionadas às categorias e associamos cada rota a uma função do CategoriaController. As rotas são:
// POST /categoria: para cadastrar uma nova categoria.
// GET /categoria: para listar todas as categorias.
// GET /categoria/:id: para buscar uma categoria específica pelo ID.
// PUT /categoria/:id: para atualizar as informações de uma categoria específica pelo ID.
// DELETE /categoria/:id: para excluir uma categoria específica pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às categorias.

const CategoriaController = require("../controller/categoria_controller.js");

router.post("/", CategoriaController.cadastrar);

router.get("/", CategoriaController.listar);

router.get("/:id", CategoriaController.buscarPorId);

router.put("/:id", CategoriaController.atualizar);

router.delete("/:id", CategoriaController.excluir);

module.exports = router;

const categoriaRoutes = require("../routes/categoria_routes.js");
app.use("/categorias", categoriaRoutes);