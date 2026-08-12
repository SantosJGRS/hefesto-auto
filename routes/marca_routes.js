//==========================================
// IMPORTAÇÕES
//==========================================

const express = require("express");

const router = express.Router();

const MarcaController =
    require("../controller/marca_controller.js");


//==========================================
// CADASTRAR MARCA
// POST /marcas
//==========================================

router.post(
    "/",
    MarcaController.cadastrar
);


//==========================================
// LISTAR TODAS AS MARCAS
// GET /marcas
//==========================================

router.get(
    "/",
    MarcaController.listar
);


//==========================================
// BUSCAR MARCA POR ID
// GET /marcas/:id
//==========================================

router.get(
    "/:id",
    MarcaController.buscarPorId
);


//==========================================
// ATUALIZAR MARCA
// PUT /marcas/:id
//==========================================

router.put(
    "/:id",
    MarcaController.atualizar
);


//==========================================
// EXCLUIR MARCA
// DELETE /marcas/:id
//==========================================

router.delete(
    "/:id",
    MarcaController.excluir
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;