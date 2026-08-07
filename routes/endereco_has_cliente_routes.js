// nesse arquivo, definimos as rotas relacionadas ao relacionamento entre endereços e clientes e associamos cada rota a uma função do EnderecoHasClienteController. As rotas são:
// POST /endereco_has_cliente: para cadastrar um novo relacionamento.
// GET /endereco_has_cliente: para listar todos os relacionamentos.
// GET /endereco_has_cliente/:id: para buscar um relacionamento específico pelo ID.
// PUT /endereco_has_cliente/:id: para atualizar um relacionamento específico pelo ID.
// DELETE /endereco_has_cliente/:id: para excluir um relacionamento específico pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas ao relacionamento entre endereços e clientes.

const EnderecoHasClienteController = require("../controller/frete_controller.js");

router.post("/", EnderecoHasClienteController.cadastrar);

router.get("/", EnderecoHasClienteController.listar);

router.get("/:id", EnderecoHasClienteController.buscarPorId);

router.put("/:id", EnderecoHasClienteController.atualizar);

router.delete("/:id", EnderecoHasClienteController.excluir);

module.exports = router;
