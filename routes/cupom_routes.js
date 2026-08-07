// nesse arquivo, definimos as rotas relacionadas aos cupons e associamos cada rota a uma função do CupomController. As rotas são:
// POST /cupom: para cadastrar um novo cupom.
// GET /cupom: para listar todos os cupons.
// GET /cupom/:id: para buscar um cupom específico pelo ID.
// PUT /cupom/:id: para atualizar as informações de um cupom específico pelo ID.
// DELETE /cupom/:id: para excluir um cupom específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons.

const CupomController = require("../controller/cupom_controller.js");

router.post("/", CupomController.cadastrar);

router.get("/", CupomController.listar);

router.get("/:id", CupomController.buscarPorId);

router.put("/:id", CupomController.atualizar);

router.delete("/:id", CupomController.excluir);

module.exports = router;