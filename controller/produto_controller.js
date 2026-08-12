//==========================================
// IMPORTA O MODEL
//==========================================

const produtoModel =
    require("../model/produto_model.js");


//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res) {

    const produto =
        req.body;


    //==========================================
    // VALIDAÇÃO DOS CAMPOS
    //==========================================

    if (
        !produto.nome ||
        !produto.codigo ||
        produto.preco_antigo === undefined ||
        produto.quantidade_estoque === undefined ||
        !produto.Loja_idLoja ||
        !produto.Categoria_idCategoria ||
        !produto.Marca_idMarca
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // CADASTRAR
    //==========================================

    produtoModel.cadastrar(
        produto,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao cadastrar produto:",
                    erro
                );


                // Código duplicado
                if (
                    erro.code ===
                    "ER_DUP_ENTRY"
                ) {

                    return res.status(409).json({

                        sucesso: false,

                        mensagem:
                            "Já existe um produto com esse código."

                    });

                }


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar produto."

                });

            }


            //==========================================
            // IMPORTANTE:
            // RETORNAR ID DO PRODUTO
            //==========================================

            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Produto cadastrado com sucesso!",

                idProduto:
                    resultado.insertId

            });

        }
    );

}


//==========================================
// LISTAR PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao listar produtos:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar produtos."

                });

            }


            return res.status(200).json(
                resultado
            );

        }
    );

}


//==========================================
// BUSCAR PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    produtoModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao buscar produto:",
                    erro
                );


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar produto."

                });

            }


            if (
                resultado.length === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json(
                resultado[0]
            );

        }
    );

}


//==========================================
// ATUALIZAR PRODUTO
//==========================================

function atualizar(req, res) {

    const id =
        req.params.id;


    const produto =
        req.body;


    //==========================================
    // VALIDAÇÃO
    //==========================================

    if (
        !produto.nome ||
        !produto.codigo ||
        produto.preco_antigo === undefined ||
        produto.quantidade_estoque === undefined ||
        !produto.Loja_idLoja ||
        !produto.Categoria_idCategoria ||
        !produto.Marca_idMarca
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // ATUALIZAR
    //==========================================

    produtoModel.atualizar(
        id,
        produto,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao atualizar produto:",
                    erro
                );


                if (
                    erro.code ===
                    "ER_DUP_ENTRY"
                ) {

                    return res.status(409).json({

                        sucesso: false,

                        mensagem:
                            "Já existe um produto com esse código."

                    });

                }


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar produto."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto atualizado com sucesso."

            });

        }
    );

}


//==========================================
// EXCLUIR PRODUTO
//==========================================

function excluir(req, res) {

    const id =
        req.params.id;


    produtoModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.log(
                    "Erro ao excluir produto:",
                    erro
                );


                if (
                    erro.code ===
                    "ER_ROW_IS_REFERENCED_2"
                ) {

                    return res.status(409).json({

                        sucesso: false,

                        mensagem:
                            "Não é possível excluir este produto porque ele possui registros vinculados."

                    });

                }


                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir produto."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Produto excluído com sucesso."

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