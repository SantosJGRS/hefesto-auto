//==========================================
// IMPORTA O MODEL
//==========================================

const imagemProdutoModel =
    require("../model/imagem_produto_model.js");


//==========================================
// CADASTRAR IMAGEM
//==========================================

function cadastrar(req, res) {

    //==========================================
    // PEGAR ID DO PRODUTO
    //==========================================

    const Produto_idProduto =
        req.body.Produto_idProduto;


    console.log(
        "Produto recebido:",
        Produto_idProduto
    );


    console.log(
        "Arquivo recebido:",
        req.file
            ? req.file.originalname
            : "Nenhum arquivo"
    );


    //==========================================
    // VALIDAR ID DO PRODUTO
    //==========================================

    if (!Produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o produto da imagem."

        });

    }


    //==========================================
    // VALIDAR ARQUIVO
    //==========================================

    if (!req.file) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione uma imagem."

        });

    }


    //==========================================
    // VALIDAR BUFFER
    //==========================================

    if (!req.file.buffer) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Não foi possível processar a imagem."

        });

    }


    //==========================================
    // MONTAR OBJETO
    //==========================================

    const imagem = {

        arquivo:
            req.file.buffer,

        Produto_idProduto:
            Number(
                Produto_idProduto
            )

    };


    //==========================================
    // CADASTRAR
    //==========================================

    imagemProdutoModel.cadastrar(
        imagem,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao cadastrar imagem:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar imagem.",

                    erro:
                        erro.message

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Imagem cadastrada com sucesso!",

                idImagem_Produto:
                    resultado.insertId,

                Produto_idProduto:
                    imagem.Produto_idProduto

            });

        }
    );

}


//==========================================
// LISTAR IMAGENS
//==========================================

function listar(req, res) {

    imagemProdutoModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao listar imagens:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar imagens."

                });

            }


            //==========================================
            // CONVERTER BLOB PARA BASE64
            //==========================================

            const imagens =
                resultado.map(
                    imagem => {

                        if (
                            imagem.arquivo
                        ) {

                            imagem.arquivo =
                                imagem.arquivo
                                    .toString(
                                        "base64"
                                    );

                        }


                        return imagem;

                    }
                );


            return res.status(200).json(
                imagens
            );

        }
    );

}


//==========================================
// BUSCAR IMAGEM POR ID
//==========================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    imagemProdutoModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao buscar imagem:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar imagem."

                });

            }


            if (
                resultado.length === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Imagem não encontrada."

                });

            }


            const imagem =
                resultado[0];


            //==========================================
            // CONVERTER PARA BASE64
            //==========================================

            if (
                imagem.arquivo
            ) {

                imagem.arquivo =
                    imagem.arquivo
                        .toString(
                            "base64"
                        );

            }


            return res.status(200).json(
                imagem
            );

        }
    );

}


//==========================================
// ATUALIZAR IMAGEM
//==========================================

function atualizar(req, res) {

    const id =
        req.params.id;


    const Produto_idProduto =
        req.body.Produto_idProduto;


    //==========================================
    // VALIDAR
    //==========================================

    if (!Produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o produto."

        });

    }


    if (!req.file) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione uma nova imagem."

        });

    }


    //==========================================
    // OBJETO IMAGEM
    //==========================================

    const imagem = {

        arquivo:
            req.file.buffer,

        Produto_idProduto:
            Number(
                Produto_idProduto
            )

    };


    //==========================================
    // ATUALIZAR
    //==========================================

    imagemProdutoModel.atualizar(
        id,
        imagem,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao atualizar imagem:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar imagem."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Imagem não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Imagem atualizada com sucesso."

            });

        }
    );

}


//==========================================
// EXCLUIR IMAGEM
//==========================================

function excluir(req, res) {

    const id =
        req.params.id;


    imagemProdutoModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao excluir imagem:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir imagem."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Imagem não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Imagem excluída com sucesso."

            });

        }
    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};