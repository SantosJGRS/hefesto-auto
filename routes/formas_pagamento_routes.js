// nesse arquivo, definimos as rotas relacionadas às formas de pagamento e associamos cada rota a uma função do FormasPagamentoController. As rotas são:
// POST /formas_pagamento: para cadastrar uma nova forma de pagamento.
// GET /formas_pagamento: para listar todas as formas de pagamento.
// GET /formas_pagamento/:id: para buscar uma forma de pagamento específica pelo ID.
// PUT /formas_pagamento/:id: para atualizar as informações de uma forma de pagamento específica pelo ID.
// DELETE /formas_pagamento/:id: para excluir uma forma de pagamento específica pelo ID.

const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.

const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às formas de pagamento.

const FormasPagamentoController = require("../controller/formas_pagamento_controller.js");

router.post("/", FormasPagamentoController.cadastrar);

router.get("/", FormasPagamentoController.listar);

router.get("/:id", FormasPagamentoController.buscarPorId);

router.put("/:id", FormasPagamentoController.atualizar);

router.delete("/:id", FormasPagamentoController.excluir);

module.exports = router;

const formasPagamentoRoutes = require("../routes/formas_pagamento_routes.js");
app.use("/formas-pagamento", formasPagamentoRoutes);