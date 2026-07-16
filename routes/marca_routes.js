// nesse arquivo, definimos as rotas relacionadas às marcas e associamos cada rota a uma função do MarcaController. As rotas são:
// POST /marca: para cadastrar uma nova marca.
// GET /marca: para listar todas as marcas.
// GET /marca/:id: para buscar uma marca específica pelo ID.
// PUT /marca/:id: para atualizar as informações de uma marca específica pelo ID.
// DELETE /marca/:id: para excluir uma marca específica pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às marcas.

const MarcaController = require("../controller/marca_controller.js");

router.post("/", MarcaController.cadastrar);

router.get("/", MarcaController.listar);

router.get("/:id", MarcaController.buscarPorId);

router.put("/:id", MarcaController.atualizar);

router.delete("/:id", MarcaController.excluir);

module.exports = router;

const marcaRoutes = require("../routes/marca_routes.js");
app.use("/marcas", marcaRoutes);

