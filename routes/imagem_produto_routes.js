//==========================================
// IMPORTAÇÕES
//==========================================

const express = require("express");
const multer = require("multer");

const router = express.Router();

const ImagemProdutoController =
    require("../controller/imagem_produto_controller.js");


//==========================================
// CONFIGURAÇÃO DO MULTER
//==========================================

const storage =
    multer.memoryStorage();


const upload =
    multer({

        storage: storage,

        limits: {
            fileSize: 3 * 1024 * 1024
        }

    });


//==========================================
// CADASTRAR IMAGEM
//==========================================

router.post(
    "/",

    function (req, res, next) {

        upload.single("arquivo")(
            req,
            res,
            function (erro) {

                if (erro) {

                    console.log(
                        "ERRO MULTER:",
                        erro
                    );

                    return res.status(400).json({

                        sucesso: false,

                        mensagem:
                            "Erro no upload: " +
                            erro.message

                    });

                }

                next();

            }
        );

    },

    ImagemProdutoController.cadastrar
);


//==========================================
// LISTAR IMAGENS
//==========================================

router.get(
    "/",
    ImagemProdutoController.listar
);


//==========================================
// BUSCAR IMAGEM
//==========================================

router.get(
    "/:id",
    ImagemProdutoController.buscarPorId
);


//==========================================
// ATUALIZAR IMAGEM
//==========================================

router.put(
    "/:id",

    upload.single("arquivo"),

    ImagemProdutoController.atualizar
);


//==========================================
// EXCLUIR IMAGEM
//==========================================

router.delete(
    "/:id",
    ImagemProdutoController.excluir
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;