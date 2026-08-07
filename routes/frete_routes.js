// nesse arquivo, definimos as rotas relacionadas aos fretes e associamos cada rota a uma função do FreteController. As rotas são:
// POST /frete: para cadastrar um novo frete.
// GET /frete: para listar todos os fretes.
// GET /frete/:id: para buscar um frete específico pelo ID.
// PUT /frete/:id: para atualizar as informações de um frete específico pelo ID.
// DELETE /frete/:id: para excluir um frete específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos fretes.

const FreteController = require("../controller/frete_controller.js");

router.post("/", FreteController.cadastrar);

router.get("/", FreteController.listar);

router.get("/:id", FreteController.buscarPorId);

router.put("/:id", FreteController.atualizar);

router.delete("/:id", FreteController.excluir);

module.exports = router;