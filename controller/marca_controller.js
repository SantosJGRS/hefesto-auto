//==========================================
// IMPORTA O MODEL
//==========================================

const marcaModel = require("../model/marca_model.js");


//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(req, res) {

    const nome = req.body.nome;


    //==========================================
    // VALIDAÇÃO
    //==========================================

    if (!nome || nome.trim() === "") {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Informe o nome da marca."

        });

    }


    //==========================================
    // OBJETO MARCA
    //==========================================

    const marca = {

        nome: nome.trim()

    };


    //==========================================
    // CADASTRAR
    //==========================================

    marcaModel.cadastrar(
        marca,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao cadastrar marca:",
                    erro
                );


                if (erro.code === "ER_DUP_ENTRY") {

                    return res.status(409).json({

                        sucesso: false,

                        mensagem:
                            "Essa marca já está cadastrada."

                    });

                }


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar marca."

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Marca cadastrada com sucesso!",

                idMarca:
                    resultado.insertId

            });

        }
    );

}


//==========================================
// LISTAR MARCAS
//==========================================

function listar(req, res) {

    marcaModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao listar marcas:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar marcas."

                });

            }


            return res.status(200).json(
                resultado
            );

        }
    );

}


//==========================================
// BUSCAR MARCA POR ID
//==========================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    marcaModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao buscar marca:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar marca."

                });

            }


            if (
                resultado.length === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Marca não encontrada."

                });

            }


            return res.status(200).json(
                resultado[0]
            );

        }
    );

}


//==========================================
// ATUALIZAR MARCA
//==========================================

function atualizar(req, res) {

    const id =
        req.params.id;

    const nome =
        req.body.nome;


    //==========================================
    // VALIDAÇÃO
    //==========================================

    if (!nome || nome.trim() === "") {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o nome da marca."

        });

    }


    //==========================================
    // OBJETO MARCA
    //==========================================

    const marca = {

        nome: nome.trim()

    };


    //==========================================
    // ATUALIZAR
    //==========================================

    marcaModel.atualizar(
        id,
        marca,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao atualizar marca:",
                    erro
                );


                if (
                    erro.code ===
                    "ER_DUP_ENTRY"
                ) {

                    return res.status(409).json({

                        sucesso: false,

                        mensagem:
                            "Já existe uma marca com esse nome."

                    });

                }


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar marca."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Marca não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Marca atualizada com sucesso."

            });

        }
    );

}


//==========================================
// EXCLUIR MARCA
//==========================================

function excluir(req, res) {

    const id =
        req.params.id;


    marcaModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao excluir marca:",
                    erro
                );


                if (
                    erro.code ===
                    "ER_ROW_IS_REFERENCED_2"
                ) {

                    return res.status(409).json({

                        sucesso: false,

                        mensagem:
                            "Não é possível excluir esta marca porque ela está vinculada a um produto."

                    });

                }


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir marca."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Marca não encontrada."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Marca excluída com sucesso."

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